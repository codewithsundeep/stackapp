import Link from "next/link"
import Ad1 from "./ad1"
import Ad2 from "./ad2"
import Ad3 from "./ad3"
import Ad4 from "./ad4"

  export default async function Card(props) {
    let data = await qsn(props.name,props.tag?.params.tag);
    return (
      <>
        <div className="d-flex justify-content-evenly flex-wrap">
          <div className="shadow-6 border border-primary rounded m-2 p-2 w-45 sm:w-100">
          <Ad1/>
          </div>
          <div className="shadow-6 border border-primary rounded m-2 p-2 w-45 sm:w-100">
          <Ad3/>
          </div>
            {data.map((e,i) => (
                <div className="shadow-6 border border-primary rounded m-2 p-2 w-45 sm:w-100" key={e.question_id}>
                    <div className="h4">{e.title.slice(0,30)+"..."}</div><hr />
                    <div>
                      {i==5?<Ad4/>:""}<br/>
                        {
                            e.tags.map((x,i)=>(
                                x!='undefined'?<Link className="badge badge-primary m-1" href={"/"+x} key={i}>
                                    {x}
                                </Link>:''
                            ))
                        }
                    </div><hr />
                    <Link href={`/answer/${e.accepted_answer_id}`} className="btn btn-primary rounded-pill mt-2 mb-2 position-relative bottom-0">Read More</Link>
                </div>
            ))}
            
        </div>
        <Ad2/>
        </>
    );
}

async function qsn(who,tag) {
    try {
        let req;
        let res;
      if(who=='tag'){
        req = await fetch(
            `https://api.stackexchange.com/2.3/search/advanced?tagged=${tag}&accepted=True&site=stackoverflow&filter=withbody&key=${process.env.KEY}`
          );
       res = await req.json();
       return res.items;
      }else{
        req = await fetch(
            "https://api.stackexchange.com/2.3/search/advanced?tagged=html%20;css;javascript&accepted=True&site=stackoverflow&filter=withbody&key="+process.env.KEY
          );
      res = await req.json();
      return res.items;
      }
    } catch (err) {
      return [{title:"Error Not Found!",tags:['error']}];
    }
  }