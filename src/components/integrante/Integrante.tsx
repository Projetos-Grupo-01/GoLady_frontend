import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

interface Member {
  image: string;
  name: string;
  role: string;
  linkedinUrl: string;
  githubUrl: string;
}

interface IntegranteProps {
  member: Member;
}

function Integrante({ member }: IntegranteProps) {
  return (
    <div className="flex flex-col items-center p-4">
      <img
        src={member.image}
        alt={`Foto de ${member.name}`}
        className="w-40 h-40 object-cover rounded-full border-2 border-[#115B69] shadow-md"
      />
      <h3 className="mt-4 text-xl font-semibold text-gray-800">{member.name}</h3>
      <p className="text-gray-600">{member.role}</p>
      <div className="flex gap-3 py-2 text-gray-800">
        <a href={member.linkedinUrl} className="hover:text-[#7D0700]">
          <LinkedinLogoIcon size={32}/>
        </a>
        <a href={member.githubUrl} className="hover:text-[#7D0700]">
          <GithubLogoIcon size={32} />
        </a>
      </div>
    </div>
  );
}

export default Integrante