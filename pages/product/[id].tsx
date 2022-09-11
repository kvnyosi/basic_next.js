import Layout from "../../components/Layout";

interface product {
  id:number;
  name:string;
  email:string;
  phone:string;
  website:string;
}

interface productDetailProps{
  product :product;
}
export default function productDetail(props: productDetailProps) {
  const { product } = props;

  return (
    <Layout pageTitle="Product Detail">
      <div>
        <p>{product.name}</p>
        <p>{product.email}</p>
        <p>{product.phone}</p>
        <p>{product.website}</p>
      </div>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataProducts = await res.json();

  const paths = dataProducts.map( (product:product) => ({
    params : {
      id : `${product.id}`,
    },
  }));
  return {
    paths,
    fallback:false,
  }
}

interface GetStaticProps {
  params: {
    id:string;
  }
}
export const getStaticProps = async (context:GetStaticProps) => {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const product = await res.json();

  return {
    props : {
      product,
    }
  }
}