
import ProfileCard from '@/components/ui/ProfileCard';
import { signOut, useSession } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import { authClient } from "@/lib/auth-client"

const MyprofilePage = async () => {

    await authClient.updateUser({
        image: "https://example.com/image.jpg",
        name: "John Doe",
    })



    return (
        <div>
            <ProfileCard  />
        </div>
    );
};

export default MyprofilePage;