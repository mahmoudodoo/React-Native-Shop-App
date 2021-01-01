import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ProductsOverviewScreen from '../screens/shop/ProductOverviewScreen';
import Colors from '../constants/Colors';
import { Platform } from 'react-native'

const ProductsNavigator = createStackNavigator({
    ProductsOverview:ProductsOverviewScreen,
},
    {defaultNavigationOptions: {
        headerStyle:{
            backgroundColor:Platform.OS ==='android' ? Colors.primary : '',
        },
        headerThintColor:Platform.OS === 'android' ? 'white': Colors.primary
    }}
);

export default createAppContainer(ProductsNavigator);