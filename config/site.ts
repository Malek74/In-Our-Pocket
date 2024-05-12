export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Next.js + NextUI",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Admin Review Submissions",
			href: "/admin-review",
		},
		{
			label: "SignUp",
			href: "/signup",
		},
		{
			label: "Requests",
			href: "/requests",
		},
		{
			label: "Pricing",
			href: "/pricing",
		},
		{
			label: "Blog",
			href: "/blog",
		},
		{
			label: "About",
			href: "/about",
		}
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui-docs-v2.vercel.app",
		discord: "https://discord.gg/9b6yyZKmH4",
		sponsor: "https://patreon.com/jrgarciadev"
	},

	governates: [
		{
			name: "Cairo",
			areas: ["New Cairo","6 October", "Sheikh Zayed"]
		},
		{
			name: "Alexandria",
			areas:  ["IDK", "Kornseh", "2emet el share3", "MASHROOOO3333", "Genyh"]
		}
	],
	orgTypes:["Mosque","Church","Orphanage","Hospital","School","Refugee Camp"],
	donationCat:["Clothes", "Toys", "Food", "Medical Supplies", "School Supplies", "Blood Donations"],
};
