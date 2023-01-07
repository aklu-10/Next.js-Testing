import styles from '../../styles/products.module.css';
import Image from 'next/image';
import Link from 'next/link';

export const getStaticProps=async()=>
{
    let response=await fetch("https://fakestoreapi.com/products");
    let data=await response.json();

    return {
        props:{
            data
        }
    }
}

export default function Blog({data})
{

    return (
        <>
          
          {
          data?
          <section className={styles.products}>
            
          {
            data.map(curr=>
            { return (
              <Link href={`/products/${curr.id}`} className={styles.productItem}>
              <img src={curr.image} alt="product_image">
                
              </img>
              <p>{(curr.title.length>=30)?curr.title.slice(0,30)+"...":curr.title}</p>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:'center'}}>
                <h2 style={{marginTop:"20px"}}>${curr.price}</h2>
                <p>Rating-{curr.rating.rate}</p>
              </div>
          </Link>
            )
            })
          }

            
          </section>
           :"Loading"}
        </>
    )
}