import React, { useState, useEffect, useReducer } from 'react'
import { ActivityIndicator, ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native'

import { actionCreators, initialState, reducer } from './reducer'
import { api } from './api'
import { data } from './data'
import * as items from './home_data'
import MealPlans from './MealPlans'
import NutritionInsights from './NutritionInsights'

function Home({ navigation, route }){ 
const url = (api.home ?? "home/") + (route?.params?.id ?? '')
const [state, dispatch] = useReducer(reducer, initialState)

const { item, history, loading, error } = state

const onPressTrackCalories = () => {}
const onPressTrackActivity = () => {}
const onPressSetReminders = () => {}

async function getItem() {
      dispatch(actionCreators.loading())

      try {
        if (url in history){
           dispatch(actionCreators.local(history[url]))
        } else if (url.indexOf('http') > -1){
          const response = await fetch(url)
          const json = await response.json()
          if(json){
            dispatch(actionCreators.success(route.params?.id ? json : json[0], url))
          }   
        } else {
          const json = route.params?.id ? data[route.params?.id] : items.item
          dispatch(actionCreators.success(json, url))
        }
      } catch (e) {
        dispatch(actionCreators.failure())
      }
    }

useEffect(() => {
    getItem();
}, []);
  
if (loading) {
    return (
        <View style={styles.center}>
        <ActivityIndicator animating={true} />
        </View>
    )
}

return(
<ScrollView style={styles.home} showsVerticalScrollIndicator={false}>
<MealPlans item={'meal_plans' in item ? item.meal_plans: item} navigation={navigation}/>
<NutritionInsights item={'nutrition_insights' in item ? item.nutrition_insights: item} navigation={navigation}/>
<View style={{flexDirection: 'row'}}>
<TouchableOpacity  onPress={onPressTrackCalories}>
    <View style={styles.track_calories}>{'Track Calories'}</View>
</TouchableOpacity>
<TouchableOpacity  onPress={onPressTrackActivity}>
    <View style={styles.track_activity}>{'Track Activity'}</View>
</TouchableOpacity>
</View>
<TouchableOpacity  onPress={onPressSetReminders}>
    <View style={styles.set_reminders}>{'Set Reminders'}</View>
</TouchableOpacity>
</ScrollView>
)}

export default Home;

const styles = StyleSheet.create({
    "center": {
        "flex": 1,
        "alignItems": "center",
        "justifyContent": "center"
    },
    "set_reminders": {
        "flex": 1,
        "color": "white",
        "margin": 5,
        "padding": 10,
        "textAlign": "center",
        "backgroundColor": "#1ACDA5"
    },
    "track_activity": {
        "flex": 1,
        "color": "white",
        "margin": 5,
        "padding": 10,
        "textAlign": "center",
        "backgroundColor": "#1ACDA5"
    },
    "track_calories": {
        "flex": 1,
        "color": "white",
        "margin": 5,
        "padding": 10,
        "textAlign": "center",
        "backgroundColor": "#1ACDA5"
    }
});