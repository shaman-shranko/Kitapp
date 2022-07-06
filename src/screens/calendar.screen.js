import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, View } from 'react-native';
import { getCalendar } from "../actions/index"
import Loader from '../components/loader.component';
import { commonStyle } from '../styles/common.style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

const CalendarScreen = (props) => {
  const [loading, setLoading] = useState(false)
  const [selectedDay, setSelectedDay] = useState(null)
  const [dayData, setDayData] = useState(null)

  const dataLoading = async () => {
    try {
      setLoading(true)
      await props.goLoadList();
    } catch (err) {
      console.log("Home screen reports:", err.message);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    dataLoading();
    return () => { }
  }, [])

  if (loading) {
    return <Loader />
  }

  return (<View style={commonStyle.container}>
    <View style={{ width: "100%", padding: 10 }}>
      <Calendar
        onDayPress={day => {
          setSelectedDay(day.dateString)
          setDayData(props.calendar[day.dateString])
        }}
        minDate={new Date()}
        maxDate={new Date().setDate((new Date()).getDate() + 30)}
        style={{ width: "100%" }}
      />
    </View>
    <View style={commonStyle.listView}>
      {selectedDay && <Text style={commonStyle.dayHeader}>
        {selectedDay}: {Math.floor(dayData.temp.average - 272.15)}°C, {dayData.humidity}%
        </Text>}
    </View>
  </View>)
}

const mapStateToProps = (state) => {
  return {
    city: state.weather.city,
    calendar: state.weather.calendar
  }
}
const mapDispatchToProps = dispatch => ({
  goLoadList: async () => {
    await dispatch(getCalendar())
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)
  (CalendarScreen)