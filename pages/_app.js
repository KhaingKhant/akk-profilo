import { ChakraBaseProvider } from "@chakra-ui/react";
import Layout from '../components/layouts/main';

const Website = ({Component,pageProps,router})=>{
    return (
        <ChakraBaseProvider>
             <Layout router={router}>
                <Component {...pageProps} key={router.route}/>
             </Layout>
        </ChakraBaseProvider>
    );
} 

export default Website