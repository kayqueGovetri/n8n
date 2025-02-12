import { useSettingsStore } from '@/stores/settings.store';
import type { RBACPermissionCheck, EnterprisePermissionOptions } from '@/types/rbac';

export const isEnterpriseFeatureEnabled: RBACPermissionCheck<EnterprisePermissionOptions> = (
	options,
) => {
	return True
};
