import { ApiService } from '../../src/services/ApiServise';
import { MockList } from '../__mock__/mock';
import fetchMock from 'fetch-mock';

describe('ApiService', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('fetches packages', async () => {
    fetchMock.getOnce(`https://libraries.io/api/search?q=jquery&api_key=${process.env.LIBRARIES_API_KEY}`, {
      status: 200,
      body: MockList,
      headers: { 'Content-Type': 'application/json' },
    });

    const modules = await ApiService.searchBowerModules('jquery');

    expect(modules).toEqual(MockList);
  });

  it('encodes search parameter', async () => {
    fetchMock.getOnce(
      `https://libraries.io/api/search?q=%40babel%2Fpreset-env&api_key=${process.env.LIBRARIES_API_KEY}`,
      {
        status: 200,
        body: MockList,
        headers: { 'Content-Type': 'application/json' },
      }
    );

    const modules = await ApiService.searchBowerModules('@babel/preset-env');

    expect(modules).toEqual(MockList);
  });

  it('handles failed fetch', async () => {
    fetchMock.getOnce(`https://libraries.io/api/search?q=jquery&api_key=${process.env.LIBRARIES_API_KEY}`, {
      status: 500,
    });

    await expect(ApiService.searchBowerModules('jquery')).rejects.toThrow('Failed to fetch data');
  });

  it('fetches packages sorted by stars', async () => {
    fetchMock.getOnce(`https://libraries.io/api/search?q=jquery&api_key=${process.env.LIBRARIES_API_KEY}&sort=stars`, {
      status: 200,
      body: MockList,
      headers: { 'Content-Type': 'application/json' },
    });

    const modules = await ApiService.searchBowerModules('jquery', 'stars');

    expect(modules).toEqual(MockList);
  });
});
