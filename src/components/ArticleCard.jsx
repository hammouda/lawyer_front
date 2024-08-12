import { Link } from "react-router-dom";
import DOMPurify from 'dompurify';
function ArticleCard(article){

    function getFirstNWords(text, n) {
        const words = text.split(' ');
        return words.slice(0, n).join(' ');
    }
    return(
        
        <div className="w-full group p-4 bg-[#bf9845]/50 hover:bg-secondary rounded-[20px]">
            <Link to={"/articles/"+article.article.id}>
            <div className="">
                <img className="self-stretch h-[300px] rounded-[20px] mb-3" src={"https://admin.mithaqaltashrie.com.sa/storage/"+article.article.image} />
                <div className="w-full flex flex-wrap justify-between">
                    <div className="h-[35px] px-2.5 py-[5px] bg-[#4a6382]/60 rounded-[10px] justify-center items-center gap-2.5 flex">
                        <div className="text-white text-base sm:text-sm md:text-base font-bold font-['Roboto'] leading-[25px]">{article.article.created_at.substring(0,10)}</div>
                    </div>
                    <div className="px-2.5 py-[5px] rounded-[10px] justify-center items-center gap-2.5 flex">
                        <div className="text-[#2e2e2e] group-hover:text-white text-base sm:text-sm md:text-base font-bold font-['Roboto'] leading-[25px]">Written by {article.article.writer}</div>
                    </div>
                </div>
                <div className="text-black mt-3 group-hover:text-white text-xl font-normal font-['Roboto']">
                    {article.article.title}
                </div>
                <div
                    className="text-black mt-3 group-hover:text-white text-base font-light"
                    dangerouslySetInnerHTML={{
                        __html: getFirstNWords(DOMPurify.sanitize(article.article.content), 15)
                    }}
                />
            </div>
            </Link>
        </div>
    );
}
export default ArticleCard