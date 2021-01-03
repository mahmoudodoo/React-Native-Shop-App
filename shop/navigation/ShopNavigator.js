import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ProductsOverviewScreen from '../screens/shop/ProductOverviewScreen';
import Colors from '../constants/Colors';
import { Platform } from 'react-native';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';


const ProductsNavigator = createStackNavigator({
    ProductsOverview:ProductsOverviewScreen,
    ProductDetail:ProductDetailScreen,
    Cart: CartScreen,
},
    {defaultNavigationOptions: {
        headerStyle:{
            backgroundColor:Platform.OS ==='android' ? Colors.primary : '',
        },
        headerTitleStyle:{
            fontFamily:'open-sans-bold',
            color:'white',
        },
        headerBackTitleStyle:{
            fontFamily:'open-sans',
            color:'white',
        },
        headerThintColor:Platform.OS === 'android' ? 'white': Colors.primary
    }}
);

export default createAppContainer(ProductsNavigator);