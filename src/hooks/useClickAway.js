import { useLayoutEffect, useEffect, useRef } from "react";

const useClickAway = (callback) => {
	const ref = useRef(null);
	const refCallback = useRef(callback);

	useLayoutEffect(() => {
		refCallback.current = callback;
	});

	useEffect(() => {
		const handler = (e) => {
			const element = ref.current;

			if (element && !element.contains(e.target)) {
				refCallback.current(e);
			}
		};

		document.addEventListener("mousedown", handler);
		document.addEventListener("touchstart", handler);

		return () => {
			document.removeEventListener("mousedown", handler);
			document.removeEventListener("touchstart", handler);
		};
	}, []);

	return ref;
};

export default useClickAway;
