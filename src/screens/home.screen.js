import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, View } from 'react-native';
import { getList } from "../actions/index"
import Loader from '../components/loader.component';
import { commonStyle } from '../styles/common.style';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = (props) => {

  const [loading, setLoading] = useState(false)
  const switchIcon = (name) => {
    switch (name) {
      case "Rain":
        return "rainy-outline"
      case "Clouds":
        return "partly-sunny-outline"
      default:
        return "sunny-outline"
    }


  }
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
    <Text style={commonStyle.header}>
      {props?.city?.name}, {props?.city?.country}
    </Text>
    {props.list &&
      <ScrollView style={commonStyle.scrollView}>
        {Object.values(props.list).map((element, index) => {
          return (<View key={`day_index_${index}`} style={{ margin: 10, padding: 5 }}>
            <View style={commonStyle.listView}>
              <Text style={commonStyle.dayHeader}>
                {Object.keys(props.list)[index]}
              </Text>
              <View>
                {element.map((item, subIndex) => (
                  <View style={commonStyle.subItem} key={`item_${index}_${subIndex}`}>
                    <Text style={commonStyle.quarter}>{item.dt_txt.split(" ")[1]}</Text>
                    <View style={commonStyle.quarter}><Ionicons name={switchIcon(item.weather[0].main)} size={20} /></View>
                    <Text style={commonStyle.quarter}>{Math.floor(item.main.temp)}°C</Text>
                    <Text style={commonStyle.quarter}>{Math.floor(item.main.humidity)}%</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>)
        })}
      </ScrollView>
    }
  </View >)
}

const mapStateToProps = (state) => {
  return {
    city: state.weather.city,
    list: state.weather.list
  }
}
const mapDispatchToProps = dispatch => ({
  goLoadList: async () => {
    await dispatch(getList())
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)
  (HomeScreen)