import React from 'react'
import Brush from"../assets/Brush.png"
import Holder from  "../assets/Holder.png"
import Music from "../assets/Music.png"
import Video from "../assets/Video.png"
import Ball from "../assets/Ball.png"
import Utillity from "../assets/Utillity.png"
import World from "../assets/World.png"
// import Cam from  "../Components/Cam.png "
import "./Categories.css"
const Categories = () => {
    const CategoriesCollection= [
        {
        categoriesImg: Brush,
        categoriesName :"art"
        }, 
        {
        categoriesImg: Holder,
        categoriesName :"Collectibles"
        }, 
        {
        categoriesImg: Music,
        categoriesName :"Music"
        },
        {
        categoriesImg: Video,
        categoriesName :"Video"
        },
        {
        categoriesImg:Utillity,
        categoriesName :"Utillity"
        },
        {
        categoriesImg:Ball,
        categoriesName :"sport"
        },
        {
        categoriesImg:World,
        categoriesName :"virtual world"
        },
        {
            categoriesImg:World,
            categoriesName :"virtual world"  
        }
    ]
  return (
    <div>
        <div>
            <h3 className="browse">browse categories</h3>
            <div className="categoriesInnerContainerGrid">
                {
                    CategoriesCollection.map((categInfo ,index) =>{
                        return <div key={index} className='categInfo_div'>
                            <img src={categInfo.categoriesImg} className='categoriesImg'/>
                            <p className='categoriesName'>{categInfo.categoriesName}</p>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Categories