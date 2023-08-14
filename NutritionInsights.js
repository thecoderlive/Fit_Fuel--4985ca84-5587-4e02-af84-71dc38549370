import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View, Image } from 'react-native'



function NutritionInsights({ item, navigation }){



function nutritionInsightsItem({ item }){
return (
<View style={styles.nutrition_insights_item}>
<Image
    style={styles.insight_image}
    source={{uri: item.insight_image}}
    />
<View style={{flexDirection: 'row'}}>
<Text style={styles.insight_title} numberOfLines={1}>{item.insight_title}</Text>
<Text style={styles.insight_description}>{item.insight_description}</Text>
</View>
</View>
)}

return (
<FlatList
    style={styles.nutrition_insights}
    data={item}
    renderItem={nutritionInsightsItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
)}

export default NutritionInsights;

const styles = StyleSheet.create({
    "insight_image": {
        "width": "100vw",
        "height": "100vw",
        "marginTop": 5
    },
    "insight_title": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "marginTop": 5,
        "fontWeight": "400",
        "marginHorizontal": 10,
        "paddingHorizontal": 2
    },
    "insight_description": {
        "fontSize": 12,
        "marginTop": 5,
        "fontWeight": "250",
        "marginHorizontal": 10,
        "paddingHorizontal": 2
    }
});