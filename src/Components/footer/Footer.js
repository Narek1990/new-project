import React from 'react'
import { iconsdata, additionaldata} from '../../data/mockdata';


export const Footer=()=> {
  return (
      <div>
    <div className='socialicons2'>
          {iconsdata.sort((a,b) => a.id - b.id).map((item, index) => (
                        <div className='socialiconsnew' key={index}>
                            <img
                               alt='' src={item?.src}
                            />
                        </div>
                    ))}
          </div>
          <div className='options'>
            {additionaldata.map((item,index)=>(
              <p className='optionlist'
               key={index}  >
                   {item?.title}
              </p>
            ))}
            
          </div>
          <div className='finishtext'>
          <p>Ⓒ 2021 广州现代移动数码传播有限公司版权所有</p>
            <p>Ⓒ 2021 MODERN MOBILE DIGITAL MEDIA CO. LTD. ALL RIGHTS RESERVED.</p>
            <p>粤ICP备10213522号</p>
            </div>
            </div>
  )
}
