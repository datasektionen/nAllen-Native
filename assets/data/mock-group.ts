import { GroupT, GroupMember } from "../../components/group";

const groupMemberOne: GroupMember = {
  name: "John Doe",
  phone: "+1 (555) 555-5555",
  groupName: "Group One",
};
const groupMemberTwo: GroupMember = {
  name: "Jane Doe",
  phone: "+1 (555) 555-5555",
  groupName: "Group One",
};
const groupMemberThree: GroupMember = {
  name: "John Doe",
  phone: "+1 (555) 555-5555",
  groupName: "Group Two",
};
const groupMemberFour: GroupMember = {
  name: "Jane Doe",
  phone: "+1 (555) 555-5555",
  groupName: "Group Two",
};

const groupOne: GroupT = {
  name: "Group One",
  members: [groupMemberOne, groupMemberTwo],
};
const groupTwo: GroupT = {
  name: "Group Two",
  members: [groupMemberThree, groupMemberFour, groupMemberOne, groupMemberTwo],
};

export const mockGroups: GroupT[] = [groupOne, groupTwo];
