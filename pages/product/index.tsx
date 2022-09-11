import Layout from "../../components/Layout"
import {useRouter} from 'next/router'
import styles from '../../styles/Product.module.css'

interface productProps {
  dataProducts: Array<any>;
}
export default function Product(props:productProps) {
  const { dataProducts } = props;
  const router = useRouter();
  
  console.log(dataProducts);
  
  return (
    <Layout pageTitle='Product'>
      {dataProducts.map( (product)=> (
        <div className={styles.card} key={product.id} onClick={ () => router.push(`/product/${product.id}`)}>
          <p>{product.name}</p>
          <p>{product.email}</p>
        </div>
      ))}
    </Layout>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataProducts = await res.json();
  return {
    props: {
      dataProducts,
    }
  }
}
