import React, { useState, useEffect } from "react";
import { View, Text,Image, ScrollView, SafeAreaViewBase, Pressable } from "react-native";

const Search = ({ route,navigation}) => {
  const [result, setresult] = useState({"number": 30, "offset": 0, "results": [{"id": 658277, "image": "https://img.spoonacular.com/recipes/658277-312x231.jpg", "imageType": "jpg", "title": "Rice Pilaf"}, {"id": 658276, "image": "https://img.spoonacular.com/recipes/658276-312x231.jpg", "imageType": "jpg", "title": "Rice Pudding"}, {"id": 658290, "image": "https://img.spoonacular.com/recipes/658290-312x231.jpg", "imageType": "jpg", "title": "Rice with Fried Egg and Sausage"}, {"id": 658295, "image": "https://img.spoonacular.com/recipes/658295-312x231.jpg", "imageType": "jpg", "title": "Rice-less Spicy Tuna Hand Rolls"}, {"id": 715514, "image": "https://img.spoonacular.com/recipes/715514-312x231.jpg", "imageType": "jpg", "title": "Rice Krispie Treats and Christmas"}, {"id": 716364, "image": "https://img.spoonacular.com/recipes/716364-312x231.jpg", "imageType": "jpg", "title": "Rice and Peas with Coconut Curry Mackerel"}, {"id": 658269, "image": "https://img.spoonacular.com/recipes/658269-312x231.jpg", "imageType": "jpg", "title": "Rice noodle salad with sesame oil dressing"}, {"id": 658259, "image": "https://img.spoonacular.com/recipes/658259-312x231.jpg", "imageType": "jpg", "title": "Rice Krispie Treats with Maple Syrup and Brown Sugar"}, {"id": 658287, "image": "https://img.spoonacular.com/recipes/658287-312x231.jpg", "imageType": "jpg", "title": "Rice Stuffed Bell Peppers (Zeytinyagli Biber Dolmasi)"}, {"id": 658270, "image": "https://img.spoonacular.com/recipes/658270-312x231.jpg", "imageType": "jpg", "title": "Rice Noodles With Wonton/chinese Ravioli In Mushroom Sauce"}, {"id": 665344, "image": "https://img.spoonacular.com/recipes/665344-312x231.jpg", "imageType": "jpg", "title": "Wild Rice With Bacon, Mushrooms & Green Onions"}, {"id": 653399, "image": "https://img.spoonacular.com/recipes/653399-312x231.jpg", "imageType": "jpg", "title": "Nutty Rice"}, {"id": 655524, "image": "https://img.spoonacular.com/recipes/655524-312x231.jpg", "imageType": "jpg", "title": "Pecan Rice Pilaf"}, {"id": 654735, "image": "https://img.spoonacular.com/recipes/654735-312x231.jpg", "imageType": "jpg", "title": "Party Rice Balls"}, {"id": 633756, "image": "https://img.spoonacular.com/recipes/633756-312x231.jpg", "imageType": "jpg", "title": "Baked Rice Pudding"}, {"id": 633758, "image": "https://img.spoonacular.com/recipes/633758-312x231.jpg", "imageType": "jpg", "title": "Baked Rice Custard"}, {"id": 636289, "image": "https://img.spoonacular.com/recipes/636289-312x231.jpg", "imageType": "jpg", "title": "Brown Rice For Dessert"}, {"id": 636292, "image": "https://img.spoonacular.com/recipes/636292-312x231.jpg", "imageType": "jpg", "title": "Brown Rice Mushroom Pilaf"}, {"id": 636295, "image": "https://img.spoonacular.com/recipes/636295-312x231.jpg", "imageType": "jpg", "title": "Brown Rice Vegetable Pulao"}, {"id": 643786, "image": "https://img.spoonacular.com/recipes/643786-312x231.jpg", "imageType": "jpg", "title": "Fried Rice - Chinese comfort food"}, {"id": 649926, "image": "https://img.spoonacular.com/recipes/649926-312x231.jpg", "imageType": "jpg", "title": "Lentil Rice Soup"}, {"id": 648822, "image": "https://img.spoonacular.com/recipes/648822-312x231.jpg", "imageType": "jpg", "title": "Kerabu Rice (Rice Salad)"}, {"id": 1095905, "image": "https://img.spoonacular.com/recipes/1095905-312x231.jpg", "imageType": "jpg", "title": "S'more Rice Krispie Treats"}, {"id": 1098346, "image": "https://img.spoonacular.com/recipes/1098346-312x231.jpg", "imageType": "jpg", "title": "Fiesta Rice Salad with Honey Lime Dressing"}, {"id": 654115, "image": "https://img.spoonacular.com/recipes/654115-312x231.jpg", "imageType": "jpg", "title": "Orzo Or Rice Dish"}, {"id": 716231, "image": "https://img.spoonacular.com/recipes/716231-312x231.jpg", "imageType": "jpg", "title": "Coconut Rice Pudding"}, {"id": 639807, "image": "https://img.spoonacular.com/recipes/639807-312x231.jpg", "imageType": "jpg", "title": "Coconut Rice and Carrot Sambal"}, {"id": 665781, "image": "https://img.spoonacular.com/recipes/665781-312x231.jpg", "imageType": "jpg", "title": "Zucchini Rice"}, {"id": 649187, "image": "https://img.spoonacular.com/recipes/649187-312x231.jpg", "imageType": "jpg", "title": "Lamb and Rice Noodle Stir Fry"}, {"id": 654361, "image": "https://img.spoonacular.com/recipes/654361-312x231.jpg", "imageType": "jpg", "title": "Pakistani Rice"}], "totalResults": 420});
 console.log(result)
    //  const data = async()=>{
    //      const apidata = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${route.params.search}&number=30&apiKey=8f8c2ae90ecc43809c249467912f955d`)
    //      const Json = await apidata.json()
    //      setresult(Json)
    //  }
    //  useEffect(()=>{
    //   data()
    //  },[])
     if(!result) return
  return (
    <ScrollView>
      <View>
        {result.results.map((data) => {
          return (
            <View collapsable={true} className=" bg-yellow-600 mr-2 ml-2 rounded-2xl flex flex-row justify-between p-3 h-40 border mt-2">
              <Image className=" rounded-3xl h-full w-40" source={{uri:data.image }}></Image>
          <View>
                <Text className="w-40 text-xl mr-5  font-bold ">{data.title}</Text>
                <Pressable className="  rounded-2xl bg-yellow-500   border w-20 p-1" onPress={()=>{navigation.navigate('Details',{itemId:data.id})}}>
                    <Text className="font-semibold ">
                        View more
                    </Text>
                </Pressable>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Search;
