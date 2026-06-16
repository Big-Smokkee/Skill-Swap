import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import SkillDetailsCard from "../components/SkillDetailsCard";

// {
//     "skillId": 1,
//  "skillName": "Beginner Guitar Lessons",
//  "providerName": "Alex Martin",
//  "providerEmail": "alex@skillswap.com",
//  "price": 20,
// "rating": 4.8,
// "slotsAvailable": 3,
// "description": "Acoustic guitar classes for complete beginners. Learn chords, strumming, and basic songs.",
// "image": "https://i.ibb.co.com/tpXfyjvD/vitaly-gariev-MPh-Xl-Kd-T5-Vo-unsplash.jpg",
// "category": "Music"
// }

const SkillDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [skill, setSkill] = useState({});
    useEffect(() => {
        // console.log(id, skill);
        const skill = data.find(d => d.skillId == id)
        setSkill(skill);
    }, [data, id])
    console.log(id, skill);
    return (
        <section>
            <SkillDetailsCard skill={skill}></SkillDetailsCard>
        </section>
    );
};

export default SkillDetails;