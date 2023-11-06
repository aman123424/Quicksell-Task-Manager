import { useEffect, useState } from "react";
import React from "react";
import './group.scss'
import GroupContainer from "./groupContainer/groupContainer";

import todo from '../assets/icons/todo.svg'
import backlog from '../assets/icons/backlog.svg'
import progress from '../assets/icons/progress.svg'
import done from '../assets/icons/done.svg'
import canceled from '../assets/icons/cancel.svg'



function GroupByStatus({tickets=[],orderby}){

    const [BackLog,setBackLog]=useState([])
    const [Todo,setTodo]=useState([])
    const [Inprog,setInprog]=useState([])
    const [Done,setDone]=useState([])
    const [Cancel,setCancel]=useState([])
    const [Loading,setLoading]=useState(false)
    
    
   
    
    useEffect(() => {
        let cBackLog=[]
        let cTodo=[]
        let cInprog=[]
        let cDone=[]
        let cCancel=[]
        
        for (let i = 0;i<tickets.length;i++){
            if(tickets[i].status==='Backlog'){
                cBackLog=[...cBackLog,tickets[i]]
                continue
            }
            if(tickets[i].status==='Todo'){
               cTodo=[...cTodo,tickets[i]]
                continue
            }
            if(tickets[i].status==='In progress'){
                cInprog=[...cInprog,tickets[i]]
                continue
            }
            if(tickets[i].status==='Done'){
                cDone=[...cDone,tickets[i]]
                continue
            }
            if(tickets[i].status==='Cancelled'){
                cCancel=[...cCancel,tickets[i]]
                continue
            }
        }
        if (orderby==='priority'){
            cBackLog.sort((a,b)=>b.priority-a.priority)
            cTodo.sort((a,b)=>b.priority-a.priority)
            cInprog.sort((a,b)=>b.priority-a.priority) 
        }

        else{
            cBackLog.sort((a,b)=> a.title.localeCompare(b.title))
            cTodo.sort((a,b)=> a.title.localeCompare(b.title))
            cInprog.sort((a,b)=> a.title.localeCompare(b.title))
            
        }
        setBackLog(cBackLog)
        setTodo(cTodo)
        setInprog(cInprog)
        setDone(cDone)
        setCancel(cCancel)
        setLoading(true)

        
      }, [tickets,orderby]);
    

      


    return(
        <div className="Groups-Container">
            <GroupContainer Loading={Loading} list={BackLog} title={"Backlog"} titleIconSrc={backlog}/>
            <GroupContainer Loading={Loading} list={Todo} title={"ToDo"} titleIconSrc={todo}/>
            <GroupContainer Loading={Loading} list={Inprog} title={"In Progress"} titleIconSrc={progress}/>
            <GroupContainer Loading={Loading} list={Done} title={"Done"} titleIconSrc={done}/>
            <GroupContainer Loading={Loading} list={Cancel} title={"Cancelled"} titleIconSrc={canceled}/>
        </div>
    )
}


export default GroupByStatus;