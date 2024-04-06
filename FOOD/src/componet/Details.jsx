import React, { useEffect, useState } from "react";
import { View, Text,Image,ScrollView ,ActivityIndicator} from "react-native";
const Details = ({ route }) => {
  const [data, setdata] = useState();
  const apidata = async()=>{
    const main = await fetch(`https://api.spoonacular.com/recipes/${route.params.itemId}/information?apiKey=8f8c2ae90ecc43809c249467912f955d`)
    const Json = await main.json()
    setdata(Json)
  }
  useEffect(()=>{apidata()},[])

  console.log(route.params);
  if(!data)return<View className=" flex-1  justify-center items-center"><ActivityIndicator size={"large"} color={"green"}/></View>
  return (
    <ScrollView>
 <View className="">
     <Image
     className="w-screen h-60 rounded-t-3xl"
     source={{uri:data.image}}
     />
     <View className=" rounded-t-3xl  bg-yellow-400 ">
      <Text className=" pl-3 pt-3 font-extrabold text-3xl">{data.title}</Text>
        <Text className=" pt-1 pl-3 font-semibold text-xl"> ₹-{data.pricePerServing}</Text>
        <Text className="pl-3 text-lg">Rating - {Math.floor(data.spoonacularScore)}%</Text>

    
      <Text className=" pt-3 pl-3 font-extrabold text-xl">Summury</Text>
      <Text className=" pl-3 pt-1 font-semibold ">{data.summary}</Text>
      <Text className=" p-3 font-extrabold text-2xl">Recipes</Text>
      {
      data.analyzedInstructions[0].steps.map((d)=><View className="pl-3">
          <Text className="font-bold text-lg ">Step-{d.number}</Text>
          <Text className=" ">Step-{d.step}</Text>

      </View>
    )
      }
     </View>
    
    </View>

    </ScrollView>
   
  );
};

export default Details;
