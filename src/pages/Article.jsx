import ArticleWriter from "../components/ArticleWriter";
import Menu from "../components/menu";
import RelevantArticles from "../components/RelevantArticles";

function Article() {
    return(<>
    <Menu/>
        <div className="grid grid-cols-5 gap-4 w-90">
            <div className="col-span-1 ">
                <ArticleWriter/>
            </div>
            <div className="col-span-4">
            <div className="w-100 h-[900px] justify-start items-start ">
                <div className="h-[102px] relative">
                    <div className="w-[745.88px] left-0 top-0 absolute text-[#21393e] text-5xl font-semibold font-['Roboto']">Corporate Law</div>
                    <div className="w-[745.88px] left-0 top-[77px] absolute text-[#21393e] text-4xl font-normal font-['Roboto'] leading-[25px] tracking-tight">Lorem ipsum dolor sit amet, conse</div>
                </div>
                <div className="w-100 text-black text-base font-normal font-['Roboto'] leading-[25px] tracking-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id cursus metus. Erat pellentesque adipiscing commodo elit at imperdiet dui. Varius vel pharetra vel turpis nunc eget lorem dolor. Quisque non tellus orci ac auctor augue mauris augue. A erat nam at lectus urna duis. Neque vitae tempus quam pellentesque nec. Volutpat est velit egestas dui. Pretium vulputate sapien nec sagittis aliquam. Bibendum ut tristique et egestas quis ipsum suspendisse. Sed blandit libero volutpat sed cras. Ornare quam viverra orci sagittis eu volutpat odio. Orci nulla pellentesque dignissim enim. Vehicula ipsum a arcu cursus. Convallis a cras semper auctor neque vitae tempus.
                </div>
                <div className="w-95 text-black text-base  font-['Roboto'] leading-[25px] tracking-tight">Fringilla ut morbi tincidunt augue. Id faucibus nisl tincidunt eget nullam non. Nisl tincidunt eget nullam non. Cursus risus at ultrices mi tempusimpe rdiet. Eget magna fermentum iaculis eu. Mattis molestie a iaculis at. Malesuada proin libero nunc consequat interdum varius sit amet mattis. Mattis molestie a iaculis at erat. Id cursus metus aliquam eleifend. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Praesent tristique magna sit amet purus gravida. Viverra orci sagittis eu volutpat odio. Proin sed libero enim sed. Sit amet massa vitae tortor condimentum lacinia quis vel. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id cursus metus. Erat pellentesque adipiscing commodo elit at imperdiet dui. Varius vel pharetra vel turpis nunc eget lorem dolor. Quisque non tellus orci ac auctor augue mauris augue. A erat nam at lectus urna duis. Neque vitae tempus quam pellentesque nec. Volutpat est velit egestas dui. Pretium vulputate sapien nec sagittis aliquam. Bibendum ut tristique et egestas quis ipsum suspendisse. Sed blandit libero volutpat sed cras. Ornare quam viverra orci sagittis eu volutpat odio. Orci nulla pellentesque dignissim enim. Vehicula ipsum a arcu cursus. Convallis a cras semper auctor neque vitae tempus.
                </div>
                <div className="w-90 text-black text-base font-normal font-['Roboto'] leading-[25px] tracking-tight">Fringilla ut morbi tincidunt augue. Id faucibus nisl tincidunt eget nullam non. Nisl tincidunt eget nullam non. Cursus risus at ultrices mi tempusimpe rdiet. Eget magna fermentum iaculis eu. Mattis molestie a iaculis at. Malesuada proin libero nunc consequat interdum varius sit amet mattis. Mattis molestie a iaculis at erat. Id cursus metus aliquam eleifend. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Praesent tristique magna sit amet purus gravida. Viverra orci sagittis eu volutpat odio. Proin sed libero enim sed. Sit amet massa vitae tortor condimentum lacinia quis vel. Quam
                </div>
                <div className="w-90 text-black text-base font-normal font-['Roboto'] leading-[25px] tracking-tight">Fringilla ut morbi tincidunt augue. Id faucibus nisl tincidunt eget nullam non. Nisl tincidunt eget nullam non. Cursus risus at ultrices mi tempusimpe rdiet. Eget magna fermentum iaculis eu. Mattis molestie a iaculis at. Malesuada proin libero nunc consequat      
                </div>
            </div>
            </div>
        </div>
            <RelevantArticles/>
    </>);

}
export default Article;