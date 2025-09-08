import { AntDesign, EvilIcons, Feather, FontAwesome, Ionicons } from "@expo/vector-icons"
import { Tabs } from "expo-router";
import "@/styles/global.css";
import { styles} from "@/styles/_homestyle"


const homeRootLayout = () =>{
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: '#34967C',
            headerShown: false,
            justifyContent: "space-around",
            alignItems: "center",
        }}
        >
            <Tabs.Screen name="index" options={{
                title: 'Home',
                tabBarIcon: ({color}) => <AntDesign name="home" size={24}
                color={color} />
            }} />
            <Tabs.Screen name="search" options={{
                title: 'Search',
                tabBarIcon: ({ color }) => <Feather name="search" size={24}
                color={color} />
            }}/>
            <Tabs.Screen name="saved" options={{
                title: 'Saved',
                headerShown: true,
                tabBarIcon: ({color}) => <EvilIcons name="heart" size={24}
                color={color} />
            }} />
            <Tabs.Screen name="inbox" options={{
                title: 'Inbox',
                headerShown: true,
                tabBarIcon: ({ color  }) => <Ionicons name="chatbubbles-outline" size={24}
                color={color}/>
            }}/>
            <Tabs.Screen name="profile" options={{
                title: 'profile',
                headerShown: true,
                tabBarIcon: ({ color }) => <FontAwesome name="user-o" size={24}
                color="black" />
            }} />

            
        </Tabs>
    )
}

export default homeRootLayout