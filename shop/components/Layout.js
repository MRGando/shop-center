import Meta from "./Meta"
import Footer from "./Sections/Footer"
import Header from "./Sections/Header"
import SearchBox from '@/components/partials/SearchBox'
import { useEffect } from "react"
import { useContext } from "react"
import { context } from "./Context"

function Layout({ children }) {

    //don't show panels on scroll 
    const { setShowOrder, setShowCats, setMenuStatus, checkboxRef } = useContext(context);
    useEffect(() => {
        window.onscroll = () => {
            setShowOrder(false);
            setShowCats(false);
            window.onscroll = () => { checkboxRef.current.checked = false; setMenuStatus(false); setShowOrder(false) };
        };
    })


    useEffect(() => {
        const headers = document.querySelectorAll("#header");
        const scroll_top_btn = document.querySelector("#scroll_top_btn");
        const categories_section = document.querySelector("#categories_section");
        const searchBox_title = document.querySelector("#searchbox_title")
        const searchBox_input = document.querySelector("#searchbox_input")
        const ordersPanel = document.querySelector("#ordersPanel");



        setInterval(() => {
            if (searchBox_input.value.length > 0) {
                searchBox_title.style.bottom = '70px'
                searchBox_title.style.fontSize = '15px'
            } else {
                searchBox_title.style.bottom = '30px'
                searchBox_title.style.fontSize = '20px'
            }
        }, 100);



        headers.forEach(header => {
            window.addEventListener("scroll", () => {
                if (scrollY === 0) {
                    header.style.height = '94px';
                    categories_section.style.top = '4.3rem';
                    ordersPanel.style.top = '5rem';
                } else {
                    header.style.height = '60px';
                    categories_section.style.top = '3.3rem';
                    ordersPanel.style.top = '4rem';
                }
            })
        })

        scroll_top_btn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        })


    });


    return (
        <>
            <Meta />
            <Header />
            {children}
            <Footer />
            <SearchBox />

        </>
    )
}

export default Layout