import { o as __toESM } from "../_runtime.mjs";
import { _ as useAuth, f as realtimeDb, n as Input, t as Button } from "./router-C_aHWzU0.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import "../_libs/firebase.mjs";
import { a as ref, c as update, r as onValue } from "../_libs/@firebase/database+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { r as Section } from "./Section-LoSZXcgc.mjs";
import { t as PageHero } from "./PageHero-BppEpxlo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.inbox-J92VT0rg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminInboxPage() {
	const { user, loading, isAdmin } = useAuth();
	const [conversations, setConversations] = (0, import_react.useState)([]);
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [reply, setReply] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (!isAdmin) return;
		return onValue(ref(realtimeDb, "conversations"), (snapshot) => {
			const data = snapshot.val() || {};
			const list = Object.entries(data).map(([id, value]) => {
				const item = value;
				return {
					id,
					...item.meta ? { meta: item.meta } : {},
					...item.messages ? { messages: item.messages } : {}
				};
			}).sort((a, b) => Number(b.meta?.updatedAt || 0) - Number(a.meta?.updatedAt || 0));
			setConversations(list);
			if (!selected && list[0]) setSelected(list[0].id);
		});
	}, [isAdmin, selected]);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "min-h-[70vh]" });
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-3xl border border-border bg-card p-8",
		children: "Please sign in with your admin account first."
	}) });
	if (!isAdmin) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-3xl border border-border bg-card p-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-xl font-semibold",
			children: "Admin access required"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-2 text-sm text-muted-foreground",
			children: [
				"Add your UID to the Firebase Realtime Database ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("code", { children: ["/admins/", user.uid] }),
				" node with value ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "true" }),
				" after deployment."
			]
		})]
	}) });
	const active = conversations.find((item) => item.id === selected);
	const messages = Object.entries(active?.messages || {}).map(([id, item]) => ({
		id,
		...item
	})).sort((a, b) => Number(a.createdAt || 0) - Number(b.createdAt || 0));
	const sendReply = async (event) => {
		event.preventDefault();
		if (!selected || !reply.trim()) return;
		const key = `messages/${selected}`;
		const newKey = crypto.randomUUID();
		try {
			await update(ref(realtimeDb, `conversations/${selected}`), {
				[`${key}/${newKey}`]: {
					uid: user.uid,
					text: reply.trim(),
					createdAt: Date.now()
				},
				"meta/lastMessage": reply.trim(),
				"meta/updatedAt": Date.now()
			});
			setReply("");
		} catch {
			toast.error("Could not send reply. Check your Realtime Database admin rule.");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Admin inbox",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Client ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-gradient",
				children: "support"
			}),
			" inbox"
		] }),
		description: "Reply to logged-in clients from the Irqsa Edge admin workspace."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid min-h-[560px] overflow-hidden rounded-3xl border border-border bg-card lg:grid-cols-[300px_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "border-b border-border lg:border-b-0 lg:border-r",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-b border-border p-4 font-semibold",
				children: [
					"Conversations (",
					conversations.length,
					")"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-h-[560px] overflow-y-auto",
				children: conversations.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setSelected(item.id),
					className: `block w-full border-b border-border p-4 text-left ${selected === item.id ? "bg-accent" : "hover:bg-secondary/50"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium text-foreground",
							children: item.meta?.clientName || "Client"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-xs text-muted-foreground",
							children: item.meta?.clientEmail
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 truncate text-xs text-muted-foreground",
							children: item.meta?.lastMessage || "No messages yet"
						})
					]
				}, item.id))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-[560px] flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-b border-border p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold",
						children: active?.meta?.clientName || "Select a conversation"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: active?.meta?.clientEmail || ""
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 space-y-3 overflow-y-auto p-5",
					children: messages.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "No messages in this conversation."
					}) : messages.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `max-w-[80%] rounded-2xl px-4 py-3 text-sm ${item.uid === user.uid ? "ml-auto bg-primary text-primary-foreground" : "bg-secondary text-foreground"}`,
						children: item.text
					}, item.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: sendReply,
					className: "flex gap-2 border-t border-border p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: reply,
						onChange: (e) => setReply(e.target.value),
						placeholder: "Reply to client…",
						disabled: !selected
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						variant: "premium",
						disabled: !selected,
						children: "Send"
					})]
				})
			]
		})]
	}) })] });
}
//#endregion
export { AdminInboxPage as component };
