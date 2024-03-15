import Pill from "@/components/Pill";
export const pillType = {
    Tailwind: "Tailwind.css",
    JavaScript: "JavaScript",
    Python: "Python",
    Vercel: "Vercel",
    React: "React",
    LocalStorage: "LocalStorage",
    MicrosoftAzure: "Microsoft Azure",
    GoogleCloud: "Google Cloud",
    MySql:"MySql",
    TypeScript: "TypeScript",
    Django: "Django",
    Bootstrap: "Bootstrap"
};

class Pills {
    static createPill = ({ value, style }) => {
        return <div>
            <Pill style = {style}>{value}</Pill>
        </div>

    };
};

export default Pills;