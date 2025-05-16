'use client';

import { useEffect } from 'react';
import { useSettings } from '@/stores/useSettings';

export default function StoreTester() {
  const apiKey     = useSettings((s) => s.apiKey);
  const setApiKey  = useSettings((s) => s.setApiKey);

  // log every time apiKey changes
  useEffect(() => {
    console.log('[StoreTester] apiKey →', apiKey || '(empty)');
  }, [apiKey]);

  return (
    <div className="rounded border p-4 space-y-3 max-w-sm">
      <h2 className="font-semibold">Zustand store test</h2>

      <input
        type="password"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        placeholder="Type anything…"
        className="w-full rounded border p-2"
      />

      <p className="text-sm text-muted-foreground">
        Current value:&nbsp;
        <span className="font-mono">{apiKey || '(empty)'}</span>
      </p>
    </div>
  );
}
