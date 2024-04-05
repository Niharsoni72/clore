import React, { Fragment, useState, useEffect } from 'react'
import styles from '../../CSS/ShopPage/Filter.module.css';
const Filter = (props) => {

    const [brand, setBrand] = useState([]);
    const [category, setCategory] = useState([]);
    const [size, setSize] = useState({});
    const [brandFilter,setBrandFilter]=useState()
    const [categoryFilter,setCategoryFilter]=useState();
    const [sizeFilter,setSizeFilter]=useState();
    let sizeList = []

    const getbrand = async () => {
        const res = await fetch("http://localhost:1337/api/getbrand", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        });
        const brandData = await res.json()
        if (res.status === 422) {
            console.log("error in retrieving brand");
        }
        else {
            setBrand(brandData)
        }
    }

    const getCateory = async () => {
        const res = await fetch("http://localhost:1337/api/getcategory", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        });
        const categoryData = await res.json()
        if (res.status === 422) {
            console.log("error in retrieving category");
        }
        else {
            setCategory(categoryData)
        }
    }
    const getSize = async () => {
        const res = await fetch("http://localhost:1337/api/getsize", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        });
        const sizeData = await res.json()
        if (res.status === 422) {
            console.log("error in retrieving size");
        }
        else {
            setSize(sizeData);
        }
    }
    useEffect(() => {
        getbrand();
        getCateory();
        getSize();
    }, [])
    const submitHandler = async (e) => {

        e.preventDefault();
        props.onFilterDataSubmitHandler(brandFilter,categoryFilter,sizeFilter)
    }

    // useEffect(()=>{
    //     console.log("category",categoryFilter,"brand",brandFilter,"size",sizeFilter);
    //     props.onFilterDataSubmitHandler(brandFilter,categoryFilter,sizeFilter)
    // },[brandFilter,categoryFilter,sizeFilter])
    useEffect(()=>{
        props.onBrandChange(brandFilter)   
    },[brandFilter])
    useEffect(()=>{
        props.onCategoryChange(categoryFilter)
    },[categoryFilter]);
    useEffect(()=>{
        props.onSizeChange(sizeFilter)
    },[sizeFilter])
    return (
        <Fragment>
            <div className={styles.main_container}>
                <form onSubmit={submitHandler}>
                    <div className={styles.filter_div_container}>
                        <h5>Brands</h5>

                        {
                            brand.map((item) => {
                                return (<div>{item.brand_name}<input type="radio" name="brands" value={item._id} 
                                    onChange={(e)=>{
                                        setBrandFilter(e.target.value);
                                    }}
                                /></div>)
                            })
                        }

                    </div>
                    <hr></hr>
                    <div className={styles.filter_div_container}>
                        <h5>Category</h5>
                        {
                            category.map((item) => {
                                return (<div>{item.category_name}<input type="radio" name='categories' value={item._id} 
                                    onChange={(e)=>{
                                        setCategoryFilter(e.target.value);
                                    }}
                                /></div>)
                            })
                        }

                    </div>
                    <hr></hr>
                    <div className={styles.filter_div_container}>
                        <h5>Size</h5>
                        {

                            Object.keys(size).forEach((key, index) => {

                                sizeList.push(key);
                            })
                        }

                        {
                            sizeList.length > 0 ?
                                sizeList.map((item) => {
                                    return (<div>{item}<input type="radio" name="lengths" value={item} 
                                        onChange={
                                            (e) => {
                                                setSizeFilter(e.target.value);
                                            }
                                        }
                                    /></div>);
                                }):""
                        }
                    </div>
                    <input type="reset" value="Reset" className='btn btn-secondary' onClick={()=>{
                        setBrandFilter("")
                        setCategoryFilter("")
                        setSizeFilter("")
                        props.onResetFilter();
                    }}/>
                </form>
            </div>

        </Fragment>
    )
}

export default Filter