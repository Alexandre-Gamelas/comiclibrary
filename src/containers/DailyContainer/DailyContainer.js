import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Daily } from '../../components/organisms'

function DailyContainer() {
  const [character, setCharacter] = useState(false)
  const [issue, setIssue] = useState(false)
  const [fetch, setFetch] = useState(true)
  const [loading, setLoading] = useState(false)

  const getIssue = () => {
    const { first_appeared_in_issue } = character
    const id = first_appeared_in_issue.id
    const path = "https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/issues/?api_key=871a206577ce22e75964fba2c7a20ff1d1502020&format=json&field_list=name,deck,image&filter=id:" + id
    axios.get(path)
      .then(function (response) {
        // handle success
        console.log("Daily Hero First Issue: ", response.data.results[0]);
        setIssue(response.data.results[0])
        setLoading(false)
      })
      .catch(function (error) {
        console.log("Erro Daily: ", error);
        setLoading(false)
      })

  }

  const getHero = () => {
    const path = "https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/characters/?api_key=871a206577ce22e75964fba2c7a20ff1d1502020&format=json&field_list=name,image,count_of_issue_appearances,deck,origin,birth,publisher,first_appeared_in_issue&filter=id:1444"
    setLoading(true)
    axios.get(path)
      .then(function (response) {
        // handle success
        console.log("Daily Hero: ", response.data.results[0]);
        setCharacter(response.data.results[0])
      })
      .catch(function (error) {
        console.log("Erro Daily: ", error);
        setFetch(false)
        setLoading(false)
      })
  }


  useEffect(() => {
    getHero()
  }, [fetch])

  useEffect(() => {
    if (character)
      getIssue()
  }, [character])

  return (
    <Daily character={character} issue={issue} loading={loading} />
  )
}

export default DailyContainer
