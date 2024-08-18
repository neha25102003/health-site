export const exerciseOptions = {
  method: 'GET',
  
  headers: {
    'x-rapidapi-key': 'aef1f4cf7cmsh5d35ad086e75b06p114d7cjsn711d75009c3c',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
}}
export const youtubeoptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'aef1f4cf7cmsh5d35ad086e75b06p114d7cjsn711d75009c3c',
  },
};
export const fetchData = async (url, options) => {
    const response= await fetch(url, options);
    const data = await response.json();
    return data;
}
