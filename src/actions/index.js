const setListToReducer = data => ({
  type: "LOAD_FIVE_DAYS",
  payload: data
})
const setCalendarToReducer = data => ({
  type: "LOAD_CALENDAR",
  payload: data
})

export const getList = () => async (dispatch) => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c29b39b8f3msh984d0ac8242c16ep1a4302jsn63a56ce150ab',
      'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
    }
  };

  fetch('https://community-open-weather-map.p.rapidapi.com/forecast?q=novovolynsk%2Cua&units=metric&mode=json&cnt=40', options)
    .then(response => response.json())
    .then(response => {
      let grouped = response.list.reduce(function (r, a) {
        r[a.dt_txt.split(" ")[0]] = r[a.dt_txt.split(" ")[0]] || [];
        r[a.dt_txt.split(" ")[0]].push(a)
        return r;
      }, Object.create(null));
      response.grouped = grouped
      dispatch(setListToReducer(response))
    })
    .catch(err => console.error(err));
}

export const getCalendar = () => async (dispatch) => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c29b39b8f3msh984d0ac8242c16ep1a4302jsn63a56ce150ab',
      'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
    }
  };

  fetch('https://community-open-weather-map.p.rapidapi.com/climate/month?q=novovolynsk', options)
    .then(response => response.json())
    .then(response => {
      let sorted = []
      Object.values(response.list).map((element, index) => {
        sorted[(new Date(element.dt * 1000)).toISOString().split("T")[0]]= element
      })
      console.log(sorted)
      dispatch(setCalendarToReducer({ calendar: sorted }))
    })
    .catch(err => console.error(err));
}