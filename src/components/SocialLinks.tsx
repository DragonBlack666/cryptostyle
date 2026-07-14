import { Twitter, Youtube, Send } from "lucide-react";

const links = [
  { name: "YouTube", href: "#", icon: Youtube },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Telegram", href: "#", icon: Send },
];

export function SocialLinks() {
  return (
    <div className="hidden items-center gap-2 md:flex">
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 bg-surface/60 text-foreground/80 backdrop-blur transition hover:border-gold hover:text-gold"
          >
            <Icon className="h-4 w-4" />
          </a>
        );
      })}
    </div>
  );
}
