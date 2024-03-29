import { Member, Profile, Server } from "@prisma/client";

export type ServerWithMembrsWithProfiles = Server & {
  members: (Member & { profile: Profile })[];
};
