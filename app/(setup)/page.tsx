import { InitialModal } from "@/components/modals/initial-modal";
import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import { redirect } from "next/navigation";

const SetupPage = async () => {
  const profile = await initialProfile();
  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

//   console.log(server, "server");

  if (server) {
    return redirect(`/server/${server.id}`);
  }

  return <div><InitialModal /></div>;
};

export default SetupPage;