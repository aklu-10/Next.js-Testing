import styles from '../../styles/productItem.module.css'

export const getStaticPaths=async()=>
{

    let response=await fetch("https://fakestoreapi.com/products");
    let data=await response.json();
    
    const paths=data.map(curr=>
        {
            return {
                params:{productId:curr.id.toString(),},
            }
        })

    return {

        paths,
        fallback:false
    }
}

export const getStaticProps=async(context)=>
{

    let id=context.params.productId;
    let response=await fetch(`https://fakestoreapi.com/products/${id}`);
    let data=await response.json();
    
    return {
        props:{
            data,
        }
    }
} 

export default function ProductItem({data})
{
   return (
    <>
    <section className={styles.container} style={{display:"flex",justifyContent:"space-between",marginTop:"40px"}}>
      <div>
          <img src={data.image} alt={data.description} width="400" />
      </div>
      <div className={styles.productData} style={{marginLeft:"50px"}}>
          <h1>{data.title}</h1> 
          <p>{data.description}</p>
          <br />
          <h1>${data.price}</h1>
          <br />
          <button onClick={()=>alert("Fake api data")} style={{padding:"8px 40px",fontSize:"20px"}}>Buy</button>
      </div>
      </section>
    </>
   )
}