'use strict';

const DefaultSettings = {
	enabled: true,
	enableTargeted: true,
	enableStrictDest: true,
	skills: {
		archer: {
			6: {
				enabled: true,
				isTargetedSkill: false,
				strictDest: false,
				baseDirection: 'south'
			},
			16: {
				enabled: true,
				isTargetedSkill: false,
				strictDest: false,
				baseDirection: 'south'
			},
		},
		berserker: {},
		lancer: {
			15: {
				enabled: true,
				isTargetedSkill: true,
				strictDest: true,
				strictDestLength: 495,
				baseDirection: 'north'
			},
			26: {
				enabled: true,
				strictDest: false,
				baseDirection: 'south'
			}
		},
		elementalist: {
			17: {
				enabled: true,
				isTargetedSkill: false,
				strictDest: true,
				strictDestLength: 350,
				strictId: 170100,
				baseDirection: 'north'
			},
		},
		priest: {
			26: {
				enabled: true,
				isTargetedSkill: false,
				strictDest: false,
				baseDirection: 'south'
			},
			38: {
				enabled: true,
				isTargetedSkill: false,
				strictDest: false,
				baseDirection: 'south'
			}
		},
		slayer: {
			17: {
				enabled: true,
				isTargetedSkill: true,
				strictDest: true,
				strictDestLength: 440,
				baseDirection: 'north'
			},
		},
		sorcerer: {
			7: {
				enabled: true,
				isTargetedSkill: false,
				strictDest: false,
				baseDirection: 'south',
			},
			18: {
				enabled: true,
				isTargetedSkill: false,
				strictDest: false,
				baseDirection: 'south',
			},
			26: {
				enabled: true,
				isTargetedSkill: false,
				strictDest: true,
				strictDestLength: 350,
				strictId: 260100,
				baseDirection: 'north'
			}
		},
		warrior: {
			12: {
				enabled: true,
				isTargetedSkill: false,
				strictDest: false,
				baseDirection: 'north',
			},
			16: {
				enabled: true,
				isTargetedSkill: true,
				strictDest: true,
				strictDestLength: 495,
				baseDirection: 'north'
			},
			27: {
				enabled: true,
				isTargetedSkill: false,
				strictDest: false,
				baseDirection: 'north',
			}
		},
		soulless: {},
		engineer: {
			"4:1": {
                    enabled: true,
                    isTargetedSkill: false,
                    strictDest: false,
                    baseDirection: 'north'
                },
                "4:3": {
                    enabled: true,
                	isTargetedSkill: false,
                    strictDest: false,
                    baseDirection: 'south'
                }
		},
	}
};

module.exports = function MigrateSettings(from_ver, to_ver, settings) {
	if (from_ver === undefined) {
		return Object.assign(Object.assign({}, DefaultSettings), settings);
	} else if (from_ver === null) {
		return DefaultSettings;
	} else {
		if (from_ver + 1 < to_ver) {
			settings = MigrateSettings(from_ver, from_ver + 1, settings);
			return MigrateSettings(from_ver + 1, to_ver, settings);
		}
		switch (to_ver) {
			default:
				let oldsettings = settings;

				settings = Object.assign(DefaultSettings, {});

				for (let option in oldsettings) {
					if (settings[option]) {
						settings[option] = oldsettings[option];
					}
				}
				break;
		}

		return settings;
	}
};
