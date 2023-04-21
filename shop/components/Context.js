import { createContext, useState, useRef } from "react"
export const context = createContext();


function Context({ children }) {
    const [isSearch, setIsSearch] = useState(false);
    const [items, setItems] = useState([]);
    const [data, setData] = useState([]);
    const [showOrder, setShowOrder] = useState(false);
    const [showCats, setShowCats] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [imageNumber, setImageNumber] = useState(0);
    const [productImages, setProductImages] = useState([]);
    const [userLogin, setUserLogin] = useState(true);
    const [showAuth, setShowAuth] = useState(false);
    const [photos, setPhotos] = useState(['1.png', '2.png', '3.png', '4.png', '5.png']);
    const ordersPanelRef = useRef(null);
    const miniOrdersPanelRef = useRef(null);
    const miniCategoryPanelRef = useRef(null);
    const [menuStatus, setMenuStatus] = useState(false);
    const checkboxRef = useRef(null);

    function filterItems(keyword, passedData) {
        console.log(keyword, passedData);
        // for (let cat in data) console.log(data[cat].cat);
        // let filtered = passedData.filter((item, index) => passedData[index].cat === keyword);
        // return filtered;
    }
    return (
        <context.Provider value={{
            isSearch,
            setIsSearch,
            items,
            setItems,
            data,
            setData,
            showOrder,
            setShowOrder,
            totalPrice,
            setTotalPrice,
            ordersPanelRef,
            miniOrdersPanelRef,
            photos,
            setPhotos,
            imageNumber,
            setImageNumber,
            filterItems,
            userLogin,
            setUserLogin,
            showAuth,
            setShowAuth,
            checkboxRef,
            showCats,
            setShowCats,
            menuStatus,
            setMenuStatus,
        }}>
            {children}
        </context.Provider>
    )
}

export default Context 