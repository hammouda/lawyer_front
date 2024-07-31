import ArticleCard from "../components/ArticleCard";
import Menu from "../components/menu";
import Footer from "../components/footer";

function Articles() {
    return(
        <>
        <Menu/>
            <div className="w-100 text-black text-[40px] font-bold font-['Roboto']">Mithaq Al Tashrie: Article collection</div>
            <div className="w-100 grid grid-cols-4 gap-1">
                <div className="grid-span-3">
                    <div className=" h-[42px] bg-white rounded-[20px] border border-[#4a6382]" />
                </div>
                <div className="grid-span-1">
                    <div className=" h-[42px] bg-white rounded-[20px] border border-[#4a6382]" />
                </div>
            </div>
            <div className="grid grid-cols-4 gap-5 mt-10">
                <div><ArticleCard/></div>
                <div><ArticleCard/></div>
                <div><ArticleCard/></div>
                <div><ArticleCard/></div>
                <div><ArticleCard/></div>
                <div><ArticleCard/></div>
                <div><ArticleCard/></div>
                <div><ArticleCard/></div>
                <div><ArticleCard/></div>

            </div>
            <Footer/>
        </>
    );
}
export default Articles