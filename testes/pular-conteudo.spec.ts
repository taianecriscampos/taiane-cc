import { expect, test } from "@playwright/test";

test("o link Pular para o conteúdo aparece no Tab e leva ao conteúdo principal", async ({
	page,
}) => {
	await page.goto("/");
	const link = page.getByRole("link", { name: "Pular para o conteúdo" });

	await page.keyboard.press("Tab");
	await expect(link).toBeFocused();
	await expect(link).toBeInViewport();

	await page.keyboard.press("Enter");
	await expect(page).toHaveURL(/#conteudo$/);
	await expect(page.locator("main#conteudo")).toBeFocused();
});
