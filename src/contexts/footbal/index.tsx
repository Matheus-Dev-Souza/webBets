import React, { useEffect } from 'react'
import { createContext, useState } from "react"
import { iMatchData, iChampFinded, iChamps, iChildren, iFootTypes, iTeamData } from "./types"
import { api } from '../../services'

export const FootContext = createContext({} as iFootTypes)

export const FootProvider = ({ children }: iChildren) => {
  const [number, setNumber] = useState(1)
  const [nameChamp, setNameChamp] = useState('')
  const [tagChamp, setTagChamp] = useState('')
  const [listChamps, setListChamps] = useState([] as iChamps[])
  const [listChampsFinded, setListChampsFinded] = useState([] as iChampFinded[])
  const [matchFinded, setMatchFinded] = useState<iMatchData | null>(null);
  const [teamHomeFinded, setTeamHomeFinded] = useState<iTeamData | null>(null);
  const [teamAwayFinded, setTeamAwayFinded] = useState<iTeamData | null>(null);
  const requestChampsList = async () => {
    try {
      const resp = await api.get('/v4/competitions/',{
        headers: {
          'X-Auth-Token': '877483580c33490eb7d65f8c0cb96c8d'
        }
      })
      setListChamps(resp.data.competitions);
      console.log(resp.data.competitions);

    } catch (error) {
      console.log(error);

    }
  }
  const requestDataChamp = async (data: string, number: number) => {
    try {
      const resp = await api.get(`/v4/competitions/${data}/matches?matchday=${number}`,{
        headers: {
          'X-Auth-Token': '877483580c33490eb7d65f8c0cb96c8d'
        }
      })
      setListChampsFinded(resp.data.matches)
      console.log(resp.data.matches);
      
    } catch (error) {
      console.log(error);
    }
  }
  const requestMatchData = async (idMatch: number) => {
    try {
      const resp = await api.get(`/v4/matches/${idMatch}`,{
        headers: {
          'X-Auth-Token': '877483580c33490eb7d65f8c0cb96c8d'
        }
      })
      setMatchFinded(resp.data)
      console.log(resp.data);
      
    } catch (error) {
      console.log(error);
      
    }
  }
  const requestInfoTeamHome = async (idTeam: number) => {
    try {
      const resp = await api.get(`/v4/teams/${idTeam}`,{
        headers: {
          'X-Auth-Token': '877483580c33490eb7d65f8c0cb96c8d'
        }
      })
      setTeamHomeFinded(resp.data)
      console.log(resp.data);
      
    } catch (error) {
      console.log(error);
      
    }
  }

  const requestInfoTeamAway = async (idTeam: number) => {
    try {
      const resp = await api.get(`/v4/teams/${idTeam}`,{
        headers: {
          'X-Auth-Token': '877483580c33490eb7d65f8c0cb96c8d'
        }
      })
      setTeamAwayFinded(resp.data)
      console.log(resp.data);
      
    } catch (error) {
      console.log(error);
      
    }
  }

  const increaseNumber = (data: string) => {
    let page = number
    setNumber(page + 1)
    console.log(page);
    
    requestDataChamp(data, page)
    
  }

  const decreaseNumber = (data: string) => {
    if(number > 1){
      setNumber(number - 1)
      requestDataChamp(data, number)
    }
  }

  useEffect(() => {
    
    requestChampsList()
    requestDataChamp('BSA', number)
  
  }, [])
  

  return (
    <FootContext.Provider value={{number, requestChampsList, listChamps, requestDataChamp, listChampsFinded, decreaseNumber, increaseNumber, nameChamp, setNameChamp, tagChamp, setTagChamp, requestMatchData, matchFinded, requestInfoTeamHome, teamHomeFinded, teamAwayFinded, requestInfoTeamAway}}>
        {children}
    </FootContext.Provider>
  )
}
