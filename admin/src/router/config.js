import Home from '../views/home/Home.vue'
import Center from '../views/center/Center.vue'
import UserList from '../views/user-manage/UserList.vue'
import UserAdd from '../views/user-manage/UserAdd.vue'
import NewsAdd from '../views/news-manage/NewsAdd.vue'
import NewsList from '../views/news-manage/NewsList.vue'
import ProductAdd from '../views/product-manage/ProductAdd.vue'
import ProductList from '../views/product-manage/ProductList.vue'
import Notfound from "@/views/notfoud/Notfound.vue";
const routes = [
    {
        path: '/index',
        component: Home,
    },
    {
        path: '/center',
        component: Center,
    },
    {
        path: '/user-manege/adduser',
        component: UserAdd,
    },
    {
        path: '/user-manege/addlist',
        component: UserList,
    },
    {
        path: '/news-manege/addnews',
        component: NewsAdd,
    },
    {
        path: '/news-manege/newslist',
        component: NewsList,
    },
    {
        path: '/product-manege/addproduct',
        component: ProductAdd,
    },
    {
        path: '/product-manege/productlist',
        component: ProductList,
    },
    {
       path:"/",
       redirect:"/index"
    },
    {
        path:"/:pathMatch(.*)*",
        name:"Notfound",
        component: Notfound
    },
]

export default routes;
