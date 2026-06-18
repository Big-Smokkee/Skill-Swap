import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import SkillDetailsCard from "../components/SkillDetailsCard";


const SkillDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [skill, setSkill] = useState({});

    useEffect(() => {
        // console.log(id, skill);
        const skill = data.find(d => d.skillId == id)
        setSkill(skill);
    }, [data, id])
    // console.log(id, skill);
    return (
        <section>
            <SkillDetailsCard skill={skill}></SkillDetailsCard>
        </section>
    );
};

export default SkillDetails;