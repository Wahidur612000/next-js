// pages/aboutus/[aboutusId].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const details = [
  { id: 1, name: 'Yash', role: 'Senior Developer' },
  { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
  { id: 3, name: 'Suresh', role: 'Frontend Developer' },
];

function DetailPage() {
  const router = useRouter();
  const  aboutusId  = router.query.aboutusId;

  const [member, setMember] = useState(null);

  useEffect(() => {
    if (aboutusId) {
      const foundMember = details.find(m => m.id === parseInt(aboutusId));
      setMember(foundMember);
    }
  }, [aboutusId]);

  if (!member) {
    return <h1>Developer doesn't exist</h1>;
  }

  return (
    <div>
      <h1>{member.name}</h1>
      <p>{member.role}</p>
    </div>
  );
}

export default DetailPage;
