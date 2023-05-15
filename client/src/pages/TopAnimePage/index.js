import Select from 'react-select'
import './index.scss'
import { useState,useEffect } from 'react';
import Datastudio from '../../assets/studio.json'
const seasonOptions = [
    { value: 'Winter', label: 'Winter' },
    { value: 'Spring', label: 'Spring' },
    { value: 'Summer', label: 'Summer' },
    { value: 'Fall', label: 'Fall' }
  ]
const yearOption =[
    { value: '2022', label: '2022' },
    { value: '2021', label: '2021' },
    { value: '2020', label: '2020' },
    { value: '2019', label: '2019' },
    { value: '2018', label: '2018' },
    { value: '2017', label: '2017' },
    { value: '2016', label: '2016' },
    { value: '2015', label: '2015' },
    { value: '2014', label: '2014' },
    { value: '2013', label: '2013' },
    { value: '2012', label: '2012' },
    { value: '2011', label: '2011' },
    { value: '2010', label: '2010' },
    { value: '2009', label: '2009' },
    { value: '2008', label: '2008' },
    { value: '2007', label: '2007' },
    { value: '2006', label: '2006' },
    { value: '2005', label: '2005' },
]
const TopAnimePage=()=>{
    const [studio,setStudio]=useState("")
    const [season,setSeason]=useState("")
    const [year,setYear]=useState("")
    const studioOptions=[]
    const onChangItem=name=>event=>{
        //setState({...state,[name]:event})
        //console.log(name+"="+event.value)
        if(name==="studio"){
            setStudio(event)
            studio(name,event.value)
        }else if(name==="season"){   
            setSeason(event)
            season(name,event.value)
        }else if(name==="year"){
            setYear(event)
            year(name,event.value)
        }
    }
    const clearValue=()=>{
        setStudio("")
        setSeason("")
        setYear("")
        //props.isClear(true)
    }
    useEffect(()=>{
        if(studioOptions===""){
            Datastudio.forEach(e=>studioOptions.push({value:e.studio_name,label:e.studio_name}))
        }
    })
    return(
        <div className='container'>
            <h1 className='header'>Top Anime</h1>
            <div className="card-filter">
                <div className='card-filter-search'><h5>studio</h5>
                    <Select
                        className="card-filter-search-select"
                        classNamePrefix="select"
                        name="studio"
                        value={studio}
                        options={studioOptions}
                        onChange={onChangItem("studio")}
                        />
                </div>
                <div className='card-filter-search'><h5>season</h5>
                    <Select 
                        className="card-filter-search-select"
                        classNamePrefix="select"
                        name="season"
                        value={season}
                        options={seasonOptions}
                        onChange={onChangItem("season")}
                        />
                </div>
                <div className='card-filter-search'><h5>year</h5>
                    <Select
                        className="card-filter-search-select" 
                        classNamePrefix="select"
                        name="year"
                        value={year}
                        options={yearOption} 
                        onChange={onChangItem("year")}
                        />
                </div>
                <div className='card-filter-search'><button className='card-filter-button-clear' onClick={clearValue}>Clear</button></div>
            </div>
        </div>
    )
}
export default TopAnimePage;