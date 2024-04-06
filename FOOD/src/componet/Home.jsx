import React, { useEffect, useState } from 'react'
import {Image, View,Text,TextInput,ScrollView, Pressable } from 'react-native'


const Home = ({navigation}) => {
   const [text,settext] = useState("")
   console.log(text)
    const [all,setall] = useState([
        {
        "id": 647830,
        "title": "Indian Lentil Dahl",
        "image": "https://img.spoonacular.com/recipes/647830-312x231.jpg",
        "imageType": "jpg"
        },
        {
        "id": 647799,
        "title": "Indian Butter Chicken",
        "image": "https://img.spoonacular.com/recipes/647799-312x231.jpg",
        "imageType": "jpg"
        },
        {
        "id": 647867,
        "title": "Indian Tandoori Chicken",
        "image": "https://img.spoonacular.com/recipes/647867-312x231.jpg",
        "imageType": "jpg"
        },
        {
        "id": 647876,
        "title": "Indian-Style Eggs On Toast",
        "image": "https://img.spoonacular.com/recipes/647876-312x231.jpg",
        "imageType": "jpg"
        },
        {
        "id": 647874,
        "title": "Indian-Inspired Lentil Soup",
        "image": "https://img.spoonacular.com/recipes/647874-312x231.jpg",
        "imageType": "jpg"
        },
        {
        "id": 631752,
        "title": "Indian Spiced Red Lentil Soup",
        "image": "https://img.spoonacular.com/recipes/631752-312x231.jpg",
        "imageType": "jpg"
        },
        {
        "id": 643775,
        "title": "Indian-Style Pumpkin Side Dish",
        "image": "https://img.spoonacular.com/recipes/643775-312x231.jpg",
        "imageType": "jpg"
        },
        {
        "id": 642547,
        "title": "Indian-Inspired Falafel Appetizer",
        "image": "https://img.spoonacular.com/recipes/642547-312x231.jpg",
        "imageType": "jpg"
        },
        {
        "id": 647795,
        "title": "Indian Asparagus with Ginger & Lime",
        "image": "https://img.spoonacular.com/recipes/647795-312x231.jpg",
        "imageType": "jpg"
        },
        {
        "id": 645961,
        "title": "Indian-Spiced Ground Beef Main Dish",
        "image": "https://img.spoonacular.com/recipes/645961-312x231.jpg",
        "imageType": "jpg"
        }
        ])
     const[catogory,setcatogary] = useState("veg") 
     const catimg = ["https://cdn1.iconfinder.com/data/icons/supermarket-108/66/31_salad_bar_veg_salad_salad_salad_bowl_lunch_salad_craving_meal-1024.png","https://cdn2.iconfinder.com/data/icons/food-184/512/Fish_dish_nonveg_food-1024.png","https://cdn4.iconfinder.com/data/icons/5-o-clock-shades-icon-set-2/128/PixelKit_5-Oclock-Shades-Icon-Set__0005_5.png"]
    // const slidedata = async()=>{
    //      const data = await fetch("https://api.spoonacular.com/recipes/complexSearch?query=indian&number=10&apiKey=8f8c2ae90ecc43809c249467912f955")
    //      const get = await data.json()
    //      setakk(get.results)
    // }
    // useEffect(()=>{
    //    slidedata()
    // },[])
  return (
   <View>
    <View className="flex flex-row justify-between">
      <Image className="  h-14 w-14 m-2 bg-black rounded-full"/>
      <Pressable><Text className="m-3 font-semibold text-lg rounded-full border border-b-4    bg-yellow-600 p-1">MAKE LATER</Text></Pressable>
    </View>
    <Text className="  font-extrabold pt-3 text-4xl">Make your own <Text className=" text-amber-300 text-5xl">food</Text> !   Stay <Text className=" text-amber-300 text-5xl">Healthy</Text>😉</Text>
   <View className="flex flex-row justify-between">
    <TextInput onChangeText={(text)=>settext(text)} className="  m-4 border w-[80%] border-white shadow-2xl font-bold text-lg rounded-full pl-3 h-10   shadow-black  border-b-4"/>
    <Pressable onPress={()=>navigation.navigate("Search Results",{search:text})}>
       <Image className="h-10 w-10 mt-4 mr-3" source={{uri:"https://cdn4.iconfinder.com/data/icons/small-n-flat/24/search-1024.png"}}/>
 
    </Pressable>
      </View>
  <Text className=" font-bold text-lg p-3 shadow-2xl  text-green-700  ">
    Most Viewed
 </Text>
 <ScrollView   horizontal={true}>
     {
    all.map((data)=><View className="w-screen bg-amber-50 h-56 flex justify-center items-center"> 
        
       <View  className="  w-sreeen flex justify-center items-center " >
         <Pressable onPress={()=>{navigation.navigate('Details',{itemId:data.id})}}>
          <Image
         
         className="w-80  rounded-t-3xl h-48"
         source={{uri:data.image}}
         />
         </Pressable>
         
         <Text className="   font-semibold text-lg">{data.title}</Text>
       
       </View>

    </View>)
  }
 </ScrollView>


 
   </View>
  )
}

export default Home