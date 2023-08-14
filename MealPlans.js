import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'



function MealPlans({ item, navigation }){

const onPressStartMealPlan = () => {}

function mealPlansItem({ item }){
return (
<View style={styles.meal_plans_item}>
<Image
    style={styles.meal_plan_image}
    source={{uri: item.meal_plan_image}}
    />
<View style={{flexDirection: 'row'}}>
<Text style={styles.meal_plan_name} numberOfLines={1}>{item.meal_plan_name}</Text>
<Text style={styles.meal_plan_description}>{item.meal_plan_description}</Text>
</View>
<TouchableOpacity  onPress={onPressStartMealPlan}>
    <View style={styles.start_meal_plan}>{'Start Meal Plan'}</View>
</TouchableOpacity>
</View>
)}

return (
<FlatList
    style={styles.meal_plans}
    data={item}
    renderItem={mealPlansItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
)}

export default MealPlans;

const styles = StyleSheet.create({
    "meal_plan_name": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "marginTop": 5,
        "fontWeight": "400",
        "marginHorizontal": 10,
        "paddingHorizontal": 2
    },
    "meal_plan_image": {
        "width": "100vw",
        "height": "100vw",
        "marginTop": 5
    },
    "start_meal_plan": {
        "flex": 1,
        "color": "white",
        "margin": 5,
        "padding": 10,
        "textAlign": "center",
        "backgroundColor": "#1ACDA5"
    },
    "meal_plan_description": {
        "fontSize": 12,
        "marginTop": 5,
        "fontWeight": "250",
        "marginHorizontal": 10,
        "paddingHorizontal": 2
    }
});