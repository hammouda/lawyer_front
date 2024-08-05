import Contact from "../components/about/contact";
import ArticleComments from "../components/ArticleComments";
import ArticleWriter from "../components/ArticleWriter";
import Footer from "../components/footer";
import Menu from "../components/menu";
import RelevantArticles from "../components/RelevantArticles";



function Article() {
    return(<>
    <Menu/>
    <div className="w-full bg-white py-16 mx-auto px-8 md:px-0 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
        <div className="grid md:grid-cols-4 gap-10 lg:gap-28">
            <div className="col-span-1 ">
                <ArticleWriter/>
            </div>
            <div className="md:col-span-3">
            <div className="">
                <div className="flex flex-col gap-y-2 lg:gap-y-4 mb-8">
                    <p className="text-[#21393e] text-2xl lg:text-5xl font-semibold">Corporate Law</p>
                    <p className="text-[#21393e] text-lg lg:text-4xl">Lorem ipsum dolor sit amet, conse</p>
                </div>
                <div className="flex flex-col gap-y-7">
                    <p className="text-black text-base text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id cursus metus. Erat pellentesque adipiscing commodo elit at imperdiet dui. Varius vel pharetra vel turpis nunc eget lorem dolor. Quisque non tellus orci ac auctor augue mauris augue. A erat nam at lectus urna duis. Neque vitae tempus quam pellentesque nec. Volutpat est velit egestas dui. Pretium vulputate sapien nec sagittis aliquam. Bibendum ut tristique et egestas quis ipsum suspendisse. Sed blandit libero volutpat sed cras. Ornare quam viverra orci sagittis eu volutpat odio. Orci nulla pellentesque dignissim enim. Vehicula ipsum a arcu cursus. Convallis a cras semper auctor neque vitae tempus.
                    </p>
                    <p className="text-black text-base text-justify">Fringilla ut morbi tincidunt augue. Id faucibus nisl tincidunt eget nullam non. Nisl tincidunt eget nullam non. Cursus risus at ultrices mi tempusimpe rdiet. Eget magna fermentum iaculis eu. Mattis molestie a iaculis at. Malesuada proin libero nunc consequat interdum varius sit amet mattis. Mattis molestie a iaculis at erat. Id cursus metus aliquam eleifend. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Praesent tristique magna sit amet purus gravida. Viverra orci sagittis eu volutpat odio. Proin sed libero enim sed. Sit amet massa vitae tortor condimentum lacinia quis vel. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id cursus metus. Erat pellentesque adipiscing commodo elit at imperdiet dui. Varius vel pharetra vel turpis nunc eget lorem dolor. Quisque non tellus orci ac auctor augue mauris augue. A erat nam at lectus urna duis. Neque vitae tempus quam pellentesque nec. Volutpat est velit egestas dui. Pretium vulputate sapien nec sagittis aliquam. Bibendum ut tristique et egestas quis ipsum suspendisse. Sed blandit libero volutpat sed cras. Ornare quam viverra orci sagittis eu volutpat odio. Orci nulla pellentesque dignissim enim. Vehicula ipsum a arcu cursus. Convallis a cras semper auctor neque vitae tempus.
                    </p>
                    <p className="text-black text-base text-justify">Fringilla ut morbi tincidunt augue. Id faucibus nisl tincidunt eget nullam non. Nisl tincidunt eget nullam non. Cursus risus at ultrices mi tempusimpe rdiet. Eget magna fermentum iaculis eu. Mattis molestie a iaculis at. Malesuada proin libero nunc consequat interdum varius sit amet mattis. Mattis molestie a iaculis at erat. Id cursus metus aliquam eleifend. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Praesent tristique magna sit amet purus gravida. Viverra orci sagittis eu volutpat odio. Proin sed libero enim sed. Sit amet massa vitae tortor condimentum lacinia quis vel. Quam
                    </p>
                    <p className="text-black text-base text-justify">Fringilla ut morbi tincidunt augue. Id faucibus nisl tincidunt eget nullam non. Nisl tincidunt eget nullam non. Cursus risus at ultrices mi tempusimpe rdiet. Eget magna fermentum iaculis eu. Mattis molestie a iaculis at. Malesuada proin libero nunc consequat      
                    </p>
                </div>
                <ArticleComments/>
            </div>
            </div>
        </div>
            <RelevantArticles/>
    </div>
    <Contact/>
    <Footer/>
    </>);

}
export default Article;