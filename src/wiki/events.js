import { global } from './../vars.js';
import { races } from './../races.js';
import { govTitle } from './../civics.js';
import { housingLabel } from './../actions.js';
import { clearElement, eventActive } from './../functions.js';
import { loc } from './../locale.js';
import { swissKnife } from './../tech.js';
import { sideMenu, infoBoxBuilder } from './functions.js';

export function eventsPage(zone){
    let content = $(`#content`);
    clearElement(content);

    switch (zone){
        case 'major':
            mainEventsPage(content);
            break;
        case 'minor':
            minorEventsPage(content);
            break;
        case 'special':
            specialEventsPage(content);
            break;     
    }
}

function mainEventsPage(content){
    let mainContent = sideMenu('create',content);
    
    {   // DNA Replication
        let section = infoBoxBuilder(mainContent,{ name: 'replication', template: 'events', label: loc('wiki_events_replication'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [1,loc('wiki_events_replication_para1_note',[3])],
            }
        });
        infoBoxBuilder(mainContent, { name: 'evolution', template: 'events', label: loc('wiki_events_replication'), paragraphs: 1, h_level: 2 }, section);
        infoBoxBuilder(mainContent, { name: 'replication_examples', template: 'events', label: loc('wiki_events_replication'), h_level: 2, 
            examples: [
                loc(`event_dna`,[10])
            ]
        }, section);
        sideMenu('add',`major-events`,`replication`,loc('wiki_events_replication'));
    }

    {   // RNA Meteor
        let section = infoBoxBuilder(mainContent,{ name: 'rna_meteor', template: 'events', label: loc('wiki_events_rna_meteor'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [1,loc('wiki_events_rna_meteor_para1_note',[2])],
            }
        });
        infoBoxBuilder(mainContent, { name: 'evolution', template: 'events', label: loc('wiki_events_rna_meteor'), paragraphs: 1, h_level: 2 }, section);
        infoBoxBuilder(mainContent, { name: 'rna_meteor_examples', template: 'events', label: loc('wiki_events_rna_meteor'), h_level: 2, 
            examples: [
                loc(`event_rna`,[22])
            ]
        }, section);
        sideMenu('add',`major-events`,`rna_meteor`,loc('wiki_events_rna_meteor'));
    }

    {   // Inspiration
        infoBoxBuilder(mainContent,{ name: 'inspiration', template: 'events', label: loc('wiki_events_inspiration'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [300,600],
            }, 
            examples: [
                loc(`event_inspiration`)
            ]
        });
        sideMenu('add',`major-events`,`inspiration`,loc('wiki_events_inspiration'));
    }

    {   // Fire
        let section = infoBoxBuilder(mainContent,{ name: 'fire', template: 'events', label: loc('wiki_events_fire'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [1,`25%`],
            }
        });
        infoBoxBuilder(mainContent, { name: 'fire_condition', template: 'events', label: loc('wiki_events_fire'), paragraphs: 2, break: [2], h_level: 2 }, section);
        infoBoxBuilder(mainContent, { name: 'fire_examples', template: 'events', label: loc('wiki_events_fire'), h_level: 2, 
            examples: [
                loc(`event_fire`,[(1337).toLocaleString()])
            ]
        }, section);
        sideMenu('add',`major-events`,`fire`,loc('wiki_events_fire'));
    }

    {   // Flare
        let section = infoBoxBuilder(mainContent,{ name: 'flare', template: 'events', label: loc('wiki_events_flare'), paragraphs: 3, h_level: 2,
            para_data: {
                2: [`10%`],
                3: [`20%`,20,200],
            }
        });
        infoBoxBuilder(mainContent, { name: 'flare_condition', template: 'events', label: loc('wiki_events_flare'), paragraphs: 4, break: [2], h_level: 2 }, section);
        infoBoxBuilder(mainContent, { name: 'flare_examples', template: 'events', label: loc('wiki_events_flare'), h_level: 2, 
            examples: [
                loc(`event_flare`,[races[global.race.species].home,69]),
                loc(`event_flare2`,[races[global.race.species].home,42])
            ]
        }, section);
        sideMenu('add',`major-events`,`flare`,loc('wiki_events_flare'));
    }

    {   // Raid
        let section = infoBoxBuilder(mainContent,{ name: 'raid', template: 'events', label: loc('wiki_events_raid'), paragraphs: 3, h_level: 2,
            para_data: {
                2: [`25%`],
            }
        });
        infoBoxBuilder(mainContent, { name: 'raid_condition', template: 'events', label: loc('wiki_events_raid'), paragraphs: 1, h_level: 2 }, section);
        infoBoxBuilder(mainContent, { name: 'raid_examples', template: 'events', label: loc('wiki_events_raid'), h_level: 2, 
            examples: [
                loc(`event_raid1`,[10,31]),
                loc(`event_raid2`,[244,0,50])
            ]
        }, section);
        sideMenu('add',`major-events`,`raid`,loc('wiki_events_raid'));
    }

    {   // Siege
        let section = infoBoxBuilder(mainContent,{ name: 'siege', template: 'events', label: loc('wiki_events_siege'), paragraphs: 3, h_level: 2,
            para_data: {
                2: [`50%`],
            }
        });
        infoBoxBuilder(mainContent, { name: 'siege_condition', template: 'events', label: loc('wiki_events_siege'), paragraphs: 2, h_level: 2 }, section);
        infoBoxBuilder(mainContent, { name: 'siege_examples', template: 'events', label: loc('wiki_events_siege'), h_level: 2, 
            examples: [
                loc(`event_siege1`,[30,49]),
                loc(`event_siege2`,[(500024).toLocaleString(),0,25])
            ]
        }, section);
        sideMenu('add',`major-events`,`siege`,loc('wiki_events_siege'));
    }

    {   // Terrorist
        let section = infoBoxBuilder(mainContent,{ name: 'terrorist', template: 'events', label: loc('wiki_events_terrorist'), paragraphs: 1, h_level: 2 });
        infoBoxBuilder(mainContent, { name: 'terrorist_condition', template: 'events', label: loc('wiki_events_terrorist'), paragraphs: 1, h_level: 2 }, section);
        infoBoxBuilder(mainContent, { name: 'terrorist_examples', template: 'events', label: loc('wiki_events_terrorist'), h_level: 2, 
            examples: [
                loc(`event_terrorist1`,[0,14]),
                loc(`event_terrorist2`,[54,18])
            ]
        }, section);
        sideMenu('add',`major-events`,`terrorist`,loc('wiki_events_terrorist'));
    }

    {   // Quake
        let section = infoBoxBuilder(mainContent,{ name: 'quake', template: 'events', label: loc('wiki_events_quake'), paragraphs: 1, h_level: 2 });
        infoBoxBuilder(mainContent, { name: 'quake_condition', template: 'events', label: loc('wiki_events_quake'), paragraphs: 2, break: [2], h_level: 2 }, section);
        infoBoxBuilder(mainContent, { name: 'quake_examples', template: 'events', label: loc('wiki_events_quake'), h_level: 2, 
            examples: [
                loc('event_quake',[global.race['cataclysm'] ? races[global.race.species].solar.red : races[global.race.species].home])
            ]
        }, section);
        sideMenu('add',`major-events`,`quake`,loc('wiki_events_quake'));
    }

    {   // Doom
        let section = infoBoxBuilder(mainContent,{ name: 'doom', template: 'events', label: loc('wiki_events_doom'), paragraphs: 2, h_level: 2 });
        infoBoxBuilder(mainContent, { name: 'doom_condition', template: 'events', label: loc('wiki_events_doom'), paragraphs: 2, break: [2], h_level: 2 }, section);
        infoBoxBuilder(mainContent, { name: 'doom_examples', template: 'events', label: loc('wiki_events_doom'), h_level: 2, 
            examples: [
                loc(`event_doom`,[races[global.race.species].solar.dwarf]),
                loc(`event_doom_alt`,[races[global.race.species].solar.dwarf])
            ]
        }, section);
        sideMenu('add',`major-events`,`doom`,loc('wiki_events_doom'));
    }

    {   // Demon Horde
        let section = infoBoxBuilder(mainContent,{ name: 'dhorde', template: 'events', label: loc('wiki_events_dhorde'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [2500,5000],
            }
        });
        infoBoxBuilder(mainContent, { name: 'dhorde_condition', template: 'events', label: loc('wiki_events_dhorde'), paragraphs: 1, h_level: 2 }, section);
        infoBoxBuilder(mainContent, { name: 'dhorde_examples', template: 'events', label: loc('wiki_events_dhorde'), h_level: 2, 
            examples: [
                loc('event_demon_influx',[(3456).toLocaleString()])
            ]
        }, section);
        sideMenu('add',`major-events`,`dhorde`,loc('wiki_events_dhorde'));
    }

    {   // Ancient Ruins
        let section = infoBoxBuilder(mainContent,{ name: 'ruins', template: 'events', label: loc('wiki_events_ruins'), paragraphs: 2, break: [2], h_level: 2,
            para_data: {
                2: [loc(`resource_Iron_name`),loc(`resource_Copper_name`),loc(`resource_Steel_name`),loc(`resource_Cement_name`),'25%'],
            }
        });
        infoBoxBuilder(mainContent, { name: 'ruins_condition', template: 'events', label: loc('wiki_events_ruins'), paragraphs: 1, h_level: 2 }, section);
        infoBoxBuilder(mainContent, { name: 'ruins_examples', template: 'events', label: loc('wiki_events_ruins'), h_level: 2, 
            examples: [
                loc('event_ruins')
            ]
        }, section);
        sideMenu('add',`major-events`,`ruins`,loc('wiki_events_ruins'));
    }

    {   // Tax Revolt
        let section = infoBoxBuilder(mainContent,{ name: 'taxrevolt', template: 'events', label: loc('wiki_events_taxrevolt'), paragraphs: 2, h_level: 2 });
        infoBoxBuilder(mainContent, { name: 'taxrevolt_condition', template: 'events', label: loc('wiki_events_taxrevolt'), paragraphs: 3, break: [2], h_level: 2,
            para_data: {
                1: [`> 25%`,`< 100%`],
                2: [loc('govern_oligarchy'),`20%`],
                3: [loc('governor_noble'),`10%`]
            }
        }, section);
        infoBoxBuilder(mainContent, { name: 'taxrevolt_examples', template: 'events', label: loc('wiki_events_taxrevolt'), h_level: 2, 
            examples: [
                loc('event_tax_revolt')
            ]
        }, section);
        sideMenu('add',`major-events`,`taxrevolt`,loc('wiki_events_taxrevolt'));
    }

    {   // Slave Death
        let section = infoBoxBuilder(mainContent,{ name: 'slave', template: 'events', label: loc('wiki_events_slave'), paragraphs: 2, break: [2], h_level: 2 });
        infoBoxBuilder(mainContent, { name: 'slave_condition', template: 'events', label: loc('wiki_events_slave'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [loc(`trait_slaver_name`)]
            }
        }, section);
        infoBoxBuilder(mainContent, { name: 'slave_examples', template: 'events', label: loc('wiki_events_slave'), h_level: 2, 
            examples: [
                loc(`event_slave_death1`),
                loc(`event_slave_death2`),
                loc(`event_slave_death3`),
                loc(`event_slave_none`)
            ]
        }, section);
        sideMenu('add',`major-events`,`slave`,loc('wiki_events_slave'));
    }

    {   // Protests
        let section = infoBoxBuilder(mainContent,{ name: 'protest', template: 'events', label: loc('wiki_events_protest'), paragraphs: 3, h_level: 2,
            para_data: {
                1: [loc('govern_republic')],
                2: ['30%'],
                3: [30,90],
            }
        });
        infoBoxBuilder(mainContent, { name: 'protest_condition', template: 'events', label: loc('wiki_events_protest'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [loc(`govern_republic`)]
            }
        }, section);
        infoBoxBuilder(mainContent, { name: 'protest_examples', template: 'events', label: loc('wiki_events_protest'), h_level: 2, 
            examples: [
                loc(`event_protest0`,[housingLabel('small')]),
                loc(`event_protest1`),
                loc(`event_protest2`),
                loc(`event_protest3`),
                loc(`event_protest4`),
                loc(`event_protest5`),
                loc(`event_protest6`),
                loc(`event_protest7`),
                loc(`event_protest8`),
                loc(`event_protest9`)
            ]
        }, section);
        sideMenu('add',`major-events`,`protest`,loc('wiki_events_protest'));
    }

    {   // Scandals
        let section = infoBoxBuilder(mainContent,{ name: 'scandal', template: 'events', label: loc('wiki_events_scandal'), paragraphs: 2, h_level: 2,
            para_data: {
                1: [loc('governor_media')],
                2: ['8%',15,90]
            }
        });
        infoBoxBuilder(mainContent, { name: 'scandal_condition', template: 'events', label: loc('wiki_events_scandal'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [loc('governor_media')]
            }
        }, section);
        infoBoxBuilder(mainContent, { name: 'scandal_examples', template: 'events', label: loc('wiki_events_scandal'), h_level: 2, 
            examples: [
                loc(`event_scandal0`),
                loc(`event_scandal1`),
                loc(`event_scandal2`),
                loc(`event_scandal3`),
                loc(`event_scandal4`),
                loc(`event_scandal5`),
                loc(`event_scandal6`),
                loc(`event_scandal7`),
                loc(`event_scandal8`),
                loc(`event_scandal9`)
            ]
        }, section);
        sideMenu('add',`major-events`,`scandal`,loc('wiki_events_scandal'));
    }

    {   // Spy Caught
        let section = infoBoxBuilder(mainContent,{ name: 'spy', template: 'events', label: loc('wiki_events_spy'), paragraphs: 1, h_level: 2 });
        infoBoxBuilder(mainContent, { name: 'spy_condition', template: 'events', label: loc('wiki_events_spy'), paragraphs: 1, h_level: 2 }, section);
        infoBoxBuilder(mainContent, { name: 'spy_examples', template: 'events', label: loc('wiki_events_spy'), h_level: 2, 
            examples: [
                loc(`event_spy`,[govTitle(1)])
            ]
        }, section);
        sideMenu('add',`major-events`,`spy`,loc('wiki_events_spy'));
    }

    {   // Mine Collapse
        let section = infoBoxBuilder(mainContent,{ name: 'mine_collapse', template: 'events', label: loc('wiki_events_mine_collapse'), paragraphs: 1, h_level: 2 });
        infoBoxBuilder(mainContent, { name: 'mine_collapse_condition', template: 'events', label: loc('wiki_events_mine_collapse'), paragraphs: 1, h_level: 2 }, section);
        infoBoxBuilder(mainContent, { name: 'mine_collapse_examples', template: 'events', label: loc('wiki_events_mine_collapse'), h_level: 2, 
            examples: [
                loc(`event_mine_collapse`)
            ]
        }, section);
        sideMenu('add',`major-events`,`mine_collapse`,loc('wiki_events_mine_collapse'));
    }

    {   // M Curious
        let section = infoBoxBuilder(mainContent,{ name: 'm_curious', template: 'events', label: loc('wiki_events_m_curious'), paragraphs: 6, break: [2,3,4,5,6], h_level: 2,
            para_data: {
                2: [
                    loc('wiki_events_m_curious_para2_note1',[(50000).toLocaleString(),(5000000).toLocaleString(),loc('resource_Money_name')]),
                    loc('wiki_events_m_curious_para2_note1',[100,(100000).toLocaleString(),loc('resource_Steel_name')]),
                    loc('wiki_events_m_curious_para2_note1',[250,(1000000).toLocaleString(),loc('resource_Alloy_name')]),
                    loc('wiki_events_m_curious_para2_note1',[100,(250000).toLocaleString(),loc('resource_Adamantite_name')]),
                    loc('wiki_events_m_curious_para2_note1',[500,(50000).toLocaleString(),loc('resource_Bolognium_name')]),
                    loc('wiki_events_m_curious_para2_note2',[1,loc('resource_Soul_Gem_name')])
                ],
                3: [10],
                4: [600,1200],
                5: ['5%',200,600],
                6: [loc('race_cath'),'10%',500,1000],
            }
        });
        infoBoxBuilder(mainContent, { name: 'm_curious_condition', template: 'events', label: loc('wiki_events_m_curious'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [loc(`trait_curious_name`)]
            }
        }, section);
        infoBoxBuilder(mainContent, { name: 'm_curious_examples', template: 'events', label: loc('wiki_events_m_curious'), h_level: 2, 
            examples: [
                loc(`event_m_curious0`,[races[global.race.species].name,(444015).toLocaleString(),loc('resource_Alloy_name')]),
                loc(`event_m_curious1`,[races[global.race.species].name]),
                loc(`event_m_curious2`,[races[global.race.species].name]),
                loc(`event_m_curious3`,[races[global.race.species].name]),
                loc(`event_m_curious4a`,[loc('race_cath')]),
                loc(`event_m_curious4b`,[loc('race_octigoran')])
            ]
        }, section);
        sideMenu('add',`major-events`,`m_curious`,loc('wiki_events_m_curious'));
    }
}

function minorEventsPage(content){
    let mainContent = sideMenu('create',content);
    
    {   // Curious
        let section = infoBoxBuilder(mainContent,{ name: 'curious', template: 'events', label: loc('wiki_events_curious'), paragraphs: 2, break: [2], h_level: 2});
        infoBoxBuilder(mainContent, { name: 'curious_condition', template: 'events', label: loc('wiki_events_curious'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [loc(`trait_curious_name`)]
            }
        }, section);
        infoBoxBuilder(mainContent, { name: 'curious_examples', template: 'events', label: loc('wiki_events_curious'), h_level: 2, 
            examples: [
                loc(`event_curious0`,[races[global.race.species].name]),
                loc(`event_curious1`,[races[global.race.species].name]),
                loc(`event_curious2`,[races[global.race.species].name]),
                loc(`event_curious3`,[races[global.race.species].name]),
                loc(`event_curious4`,[races[global.race.species].name]),
                loc(`event_curious5`,[races[global.race.species].name]),
                loc(`event_curious6`,[races[global.race.species].name]),
                loc(`event_curious7`,[races[global.race.species].name]),
                loc(`event_curious8`,[races[global.race.species].name]),
                loc(`event_curious9`,[races[global.race.species].name])
            ]
        }, section);
        sideMenu('add',`minor-events`,`curious`,loc('wiki_events_curious'));
    }
    
    {   // Slave Escape
        let section = infoBoxBuilder(mainContent,{ name: 'slave_escape', template: 'events', label: loc('wiki_events_slave_escape'), paragraphs: 2, break: [2], h_level: 2 });
        infoBoxBuilder(mainContent, { name: 'slave_escape_condition', template: 'events', label: loc('wiki_events_slave_escape'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [loc(`trait_slaver_name`)]
            }
        }, section);
        infoBoxBuilder(mainContent, { name: 'slave_escape_examples', template: 'events', label: loc('wiki_events_slave_escape'), h_level: 2, 
            examples: [
                loc(`event_slave_escape1`),
                loc(`event_slave_escape2`),
                loc(`event_slave_death4`),
                loc(`event_slave_none`)
            ]
        }, section);
        sideMenu('add',`minor-events`,`slave_escape`,loc('wiki_events_slave_escape'));
    }
    
    {   // Shooting Star
        let section = infoBoxBuilder(mainContent,{ name: 'shooting_star', template: 'events', label: loc('wiki_events_shooting_star'), paragraphs: 1, h_level: 2 });
        infoBoxBuilder(mainContent, { name: 'tech', template: 'events', label: loc('wiki_events_shooting_star'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [loc(`tech_club`)]
            }
        }, section);
        infoBoxBuilder(mainContent, { name: 'shooting_star_examples', template: 'events', label: loc('wiki_events_shooting_star'), h_level: 2, 
            examples: [
                loc(`event_shooting_star`)
            ]
        }, section);
        sideMenu('add',`minor-events`,`shooting_star`,loc('wiki_events_shooting_star'));
    }
    
    {   // Tumbleweed
        let section = infoBoxBuilder(mainContent,{ name: 'tumbleweed', template: 'events', label: loc('wiki_events_tumbleweed'), paragraphs: 1, h_level: 2 });
        infoBoxBuilder(mainContent, { name: 'tech', template: 'events', label: loc('wiki_events_tumbleweed'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [loc(`tech_club`)]
            }
        }, section);
        infoBoxBuilder(mainContent, { name: 'tumbleweed_examples', template: 'events', label: loc('wiki_events_tumbleweed'), h_level: 2, 
            examples: [
                loc(`event_tumbleweed`)
            ]
        }, section);
        sideMenu('add',`minor-events`,`tumbleweed`,loc('wiki_events_tumbleweed'));
    }
    
    {   // Flashmob
        let section = infoBoxBuilder(mainContent,{ name: 'flashmob', template: 'events', label: loc('wiki_events_flashmob'), paragraphs: 1, h_level: 2 });
        infoBoxBuilder(mainContent, { name: 'tech', template: 'events', label: loc('wiki_events_flashmob'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [loc(`tech_mad_science`)]
            }
        }, section);
        infoBoxBuilder(mainContent, { name: 'flashmob_examples', template: 'events', label: loc('wiki_events_flashmob'), h_level: 2, 
            examples: [
                loc(`event_flashmob`)
            ]
        }, section);
        sideMenu('add',`minor-events`,`flashmob`,loc('wiki_events_flashmob'));
    }
    
    {   // Heatwave
        let section = infoBoxBuilder(mainContent,{ name: 'heatwave', template: 'events', label: loc('wiki_events_heatwave'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [loc(`hot`)]
            }
        });
        infoBoxBuilder(mainContent, { name: 'heatwave_condition', template: 'events', label: loc('wiki_events_heatwave'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [loc(`tech_club`),loc(`evo_challenge_cataclysm`),loc(`hot`)]
            }
        }, section);
        infoBoxBuilder(mainContent, { name: 'heatwave_examples', template: 'events', label: loc('wiki_events_heatwave'), h_level: 2, 
            examples: [
                loc(`event_heatwave`)
            ]
        }, section);
        sideMenu('add',`minor-events`,`heatwave`,loc('wiki_events_heatwave'));
    }
    
    {   // Coldsnap
        let section = infoBoxBuilder(mainContent,{ name: 'coldsnap', template: 'events', label: loc('wiki_events_coldsnap'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [loc(`cold`)]
            }
        });
        infoBoxBuilder(mainContent, { name: 'coldsnap_condition', template: 'events', label: loc('wiki_events_coldsnap'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [loc(`tech_club`),loc(`evo_challenge_cataclysm`),loc(`cold`)]
            }
        }, section);
        infoBoxBuilder(mainContent, { name: 'coldsnap_examples', template: 'events', label: loc('wiki_events_coldsnap'), h_level: 2, 
            examples: [
                loc(`event_coldsnap`)
            ]
        }, section);
        sideMenu('add',`minor-events`,`coldsnap`,loc('wiki_events_coldsnap'));
    }
    
    {   // Cucumber
        let section = infoBoxBuilder(mainContent,{ name: 'cucumber', template: 'events', label: loc('wiki_events_cucumber'), paragraphs: 1, h_level: 2 });
        infoBoxBuilder(mainContent, { name: 'tech', template: 'events', label: loc('wiki_events_cucumber'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [loc(`tech_club`)]
            }
        }, section);
        infoBoxBuilder(mainContent, { name: 'cucumber_examples', template: 'events', label: loc('wiki_events_cucumber'), h_level: 2, 
            examples: [
                loc(`event_cucumber`)
            ]
        }, section);
        sideMenu('add',`minor-events`,`cucumber`,loc('wiki_events_cucumber'));
    }
    
    {   // Planking
        let section = infoBoxBuilder(mainContent,{ name: 'planking', template: 'events', label: loc('wiki_events_planking'), paragraphs: 1, h_level: 2 });
        infoBoxBuilder(mainContent, { name: 'tech', template: 'events', label: loc('wiki_events_planking'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [loc(`tech_mad_science`)]
            }
        }, section);
        infoBoxBuilder(mainContent, { name: 'planking_examples', template: 'events', label: loc('wiki_events_planking'), h_level: 2, 
            examples: [
                loc(`event_planking`)
            ]
        }, section);
        sideMenu('add',`minor-events`,`planking`,loc('wiki_events_planking'));
    }
    
    {   // Furryfish
        let section = infoBoxBuilder(mainContent,{ name: 'furryfish', template: 'events', label: loc('wiki_events_furryfish'), paragraphs: 1, h_level: 2 });
        infoBoxBuilder(mainContent, { name: 'tech', template: 'events', label: loc('wiki_events_furryfish'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [loc(`tech_club`)]
            }
        }, section);
        infoBoxBuilder(mainContent, { name: 'furryfish_examples', template: 'events', label: loc('wiki_events_furryfish'), h_level: 2, 
            examples: [
                loc(`event_furryfish`)
            ]
        }, section);
        sideMenu('add',`minor-events`,`furryfish`,loc('wiki_events_furryfish'));
    }
    
    {   // Meteor Shower
        let section = infoBoxBuilder(mainContent,{ name: 'meteor_shower', template: 'events', label: loc('wiki_events_meteor_shower'), paragraphs: 1, h_level: 2 });
        infoBoxBuilder(mainContent, { name: 'tech', template: 'events', label: loc('wiki_events_meteor_shower'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [loc(`tech_club`)]
            }
        }, section);
        infoBoxBuilder(mainContent, { name: 'meteor_shower_examples', template: 'events', label: loc('wiki_events_meteor_shower'), h_level: 2, 
            examples: [
                loc(`event_meteor_shower`)
            ]
        }, section);
        sideMenu('add',`minor-events`,`meteor_shower`,loc('wiki_events_meteor_shower'));
    }
    
    {   // Hum
        let section = infoBoxBuilder(mainContent,{ name: 'hum', template: 'events', label: loc('wiki_events_hum'), paragraphs: 1, h_level: 2 });
        infoBoxBuilder(mainContent, { name: 'tech', template: 'events', label: loc('wiki_events_hum'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [loc(`tech_mad_science`)]
            }
        }, section);
        infoBoxBuilder(mainContent, { name: 'hum_examples', template: 'events', label: loc('wiki_events_hum'), h_level: 2, 
            examples: [
                loc(`event_hum`)
            ]
        }, section);
        sideMenu('add',`minor-events`,`hum`,loc('wiki_events_hum'));
    }
    
    {   // Bloodrain
        let section = infoBoxBuilder(mainContent,{ name: 'bloodrain', template: 'events', label: loc('wiki_events_bloodrain'), paragraphs: 1, h_level: 2 });
        infoBoxBuilder(mainContent, { name: 'tech', template: 'events', label: loc('wiki_events_bloodrain'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [loc(`tech_club`)]
            }
        }, section);
        infoBoxBuilder(mainContent, { name: 'bloodrain_examples', template: 'events', label: loc('wiki_events_bloodrain'), h_level: 2, 
            examples: [
                loc(`event_bloodrain`)
            ]
        }, section);
        sideMenu('add',`minor-events`,`bloodrain`,loc('wiki_events_bloodrain'));
    }
    
    {   // Haunting
        let section = infoBoxBuilder(mainContent,{ name: 'haunting', template: 'events', label: loc('wiki_events_haunting'), paragraphs: 1, h_level: 2 });
        infoBoxBuilder(mainContent, { name: 'tech', template: 'events', label: loc('wiki_events_haunting'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [loc(`tech_science`)]
            }
        }, section);
        infoBoxBuilder(mainContent, { name: 'haunting_examples', template: 'events', label: loc('wiki_events_haunting'), h_level: 2, 
            examples: [
                loc(`event_haunting`)
            ]
        }, section);
        sideMenu('add',`minor-events`,`haunting`,loc('wiki_events_haunting'));
    }
    
    {   // Mothman
        let section = infoBoxBuilder(mainContent,{ name: 'mothman', template: 'events', label: loc('wiki_events_mothman'), paragraphs: 1, h_level: 2 });
        infoBoxBuilder(mainContent, { name: 'tech', template: 'events', label: loc('wiki_events_mothman'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [loc(`tech_science`)]
            }
        }, section);
        infoBoxBuilder(mainContent, { name: 'mothman_examples', template: 'events', label: loc('wiki_events_mothman'), h_level: 2, 
            examples: [
                loc(`event_mothman`)
            ]
        }, section);
        sideMenu('add',`minor-events`,`mothman`,loc('wiki_events_mothman'));
    }
    
    {   // Deja Vu
        let section = infoBoxBuilder(mainContent,{ name: 'dejavu', template: 'events', label: loc('wiki_events_dejavu'), paragraphs: 1, h_level: 2 });
        infoBoxBuilder(mainContent, { name: 'dejavu_condition', template: 'events', label: loc('wiki_events_dejavu'), paragraphs: 1, h_level: 2 }, section);
        infoBoxBuilder(mainContent, { name: 'dejavu_examples', template: 'events', label: loc('wiki_events_dejavu'), h_level: 2, 
            examples: [
                loc(`event_dejavu`)
            ]
        }, section);
        sideMenu('add',`minor-events`,`dejavu`,loc('wiki_events_dejavu'));
    }
    
    {   // Dollar
        let section = infoBoxBuilder(mainContent,{ name: 'dollar', template: 'events', label: loc('wiki_events_dollar'), paragraphs: 1, h_level: 2 });
        infoBoxBuilder(mainContent, { name: 'tech', template: 'events', label: loc('wiki_events_dollar'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [loc(`tech_currency`)]
            }
        }, section);
        infoBoxBuilder(mainContent, { name: 'dollar_examples', template: 'events', label: loc('wiki_events_dollar'), h_level: 2, 
            examples: [
                loc(`event_dollar`,[6])
            ]
        }, section);
        sideMenu('add',`minor-events`,`dollar`,loc('wiki_events_dollar'));
    }
    
    {   // Pickpocket
        let section = infoBoxBuilder(mainContent,{ name: 'pickpocket', template: 'events', label: loc('wiki_events_pickpocket'), paragraphs: 1, h_level: 2 });
        infoBoxBuilder(mainContent, { name: 'tech', template: 'events', label: loc('wiki_events_pickpocket'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [loc(`tech_currency`)]
            }
        }, section);
        infoBoxBuilder(mainContent, { name: 'pickpocket_examples', template: 'events', label: loc('wiki_events_pickpocket'), h_level: 2, 
            examples: [
                loc(`event_pickpocket`,[9])
            ]
        }, section);
        sideMenu('add',`minor-events`,`pickpocket`,loc('wiki_events_pickpocket'));
    }
    
    {   // Bird
        let section = infoBoxBuilder(mainContent,{ name: 'bird', template: 'events', label: loc('wiki_events_bird'), paragraphs: 1, h_level: 2 });
        infoBoxBuilder(mainContent, { name: 'tech', template: 'events', label: loc('wiki_events_bird'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [loc(`tech_club`)]
            }
        }, section);
        infoBoxBuilder(mainContent, { name: 'bird_examples', template: 'events', label: loc('wiki_events_bird'), h_level: 2, 
            examples: [
                loc(`event_bird`)
            ]
        }, section);
        sideMenu('add',`minor-events`,`bird`,loc('wiki_events_bird'));
    }
    
    {   // Contest
        let section = infoBoxBuilder(mainContent,{ name: 'contest', template: 'events', label: loc('wiki_events_contest'), paragraphs: 1, h_level: 2 });
        infoBoxBuilder(mainContent, { name: 'tech', template: 'events', label: loc('wiki_events_contest'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [loc(`tech_science`)]
            }
        }, section);
        infoBoxBuilder(mainContent, { name: 'contest_examples', template: 'events', label: loc('wiki_events_contest'), h_level: 2, 
            examples: [
                loc(`event_contest`,[loc('event_contest_place0'),loc('event_contest_type0')]),
                loc(`event_contest`,[loc('event_contest_place1'),loc('event_contest_type1')]),
                loc(`event_contest`,[loc('event_contest_place2'),loc('event_contest_type2')]),
                loc(`event_contest`,[loc('event_contest_place0'),loc('event_contest_type3')]),
                loc(`event_contest`,[loc('event_contest_place1'),loc('event_contest_type4')]),
                loc(`event_contest`,[loc('event_contest_place2'),loc('event_contest_type5')]),
                loc(`event_contest`,[loc('event_contest_place0'),loc('event_contest_type6')]),
                loc(`event_contest`,[loc('event_contest_place1'),loc('event_contest_type7')]),
                loc(`event_contest`,[loc('event_contest_place2'),loc('event_contest_type8')]),
                loc(`event_contest`,[loc('event_contest_place0'),loc('event_contest_type9')]),
            ]
        }, section);
        sideMenu('add',`minor-events`,`contest`,loc('wiki_events_contest'));
    }
    
    {   // Cloud
        let section = infoBoxBuilder(mainContent,{ name: 'cloud', template: 'events', label: loc('wiki_events_cloud'), paragraphs: 1, h_level: 2 });
        infoBoxBuilder(mainContent, { name: 'tech', template: 'events', label: loc('wiki_events_cloud'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [loc(`tech_club`)]
            }
        }, section);
        infoBoxBuilder(mainContent, { name: 'cloud_examples', template: 'events', label: loc('wiki_events_cloud'), h_level: 2, 
            examples: [
                loc(`event_cloud`,[loc('event_cloud_type0')]),
                loc(`event_cloud`,[loc('event_cloud_type1')]),
                loc(`event_cloud`,[loc('event_cloud_type2')]),
                loc(`event_cloud`,[loc('event_cloud_type3')]),
                loc(`event_cloud`,[loc('event_cloud_type4')]),
                loc(`event_cloud`,[loc('event_cloud_type5')]),
                loc(`event_cloud`,[loc('event_cloud_type6')]),
                loc(`event_cloud`,[loc('event_cloud_type7')]),
                loc(`event_cloud`,[loc('event_cloud_type8')]),
                loc(`event_cloud`,[loc('event_cloud_type9')]),
                loc(`event_cloud`,[loc('event_cloud_type10')])
            ]
        }, section);
        sideMenu('add',`minor-events`,`cloud`,loc('wiki_events_cloud'));
    }
    
    {   // Dark Cloud
        let section = infoBoxBuilder(mainContent,{ name: 'dark_cloud', template: 'events', label: loc('wiki_events_dark_cloud'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [loc(`rain`),loc(`snow`)]
            }
        });
        infoBoxBuilder(mainContent, { name: 'dark_cloud_condition', template: 'events', label: loc('wiki_events_dark_cloud'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [loc(`tech_club`),loc(`evo_challenge_cataclysm`),loc(`rain`),loc(`snow`)]
            }
        }, section);
        infoBoxBuilder(mainContent, { name: 'dark_cloud_examples', template: 'events', label: loc('wiki_events_dark_cloud'), h_level: 2, 
            examples: [
                loc(`event_dark_cloud`)
            ]
        }, section);
        sideMenu('add',`minor-events`,`dark_cloud`,loc('wiki_events_dark_cloud'));
    }
    
    {   // Gloom
        let section = infoBoxBuilder(mainContent,{ name: 'gloom', template: 'events', label: loc('wiki_events_gloom'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [loc(`cloudy`)]
            }
        });
        infoBoxBuilder(mainContent, { name: 'gloom_condition', template: 'events', label: loc('wiki_events_gloom'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [loc(`tech_club`),loc(`evo_challenge_cataclysm`),loc(`cloudy`)]
            }
        }, section);
        infoBoxBuilder(mainContent, { name: 'gloom_examples', template: 'events', label: loc('wiki_events_gloom'), h_level: 2, 
            examples: [
                loc(`event_gloom`)
            ]
        }, section);
        sideMenu('add',`minor-events`,`gloom`,loc('wiki_events_gloom'));
    }
    
    {   // Tracks
        let section = infoBoxBuilder(mainContent,{ name: 'tracks', template: 'events', label: loc('wiki_events_tracks'), paragraphs: 1, h_level: 2 });
        infoBoxBuilder(mainContent, { name: 'tech', template: 'events', label: loc('wiki_events_tracks'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [loc(`tech_club`)]
            }
        }, section);
        infoBoxBuilder(mainContent, { name: 'tracks_examples', template: 'events', label: loc('wiki_events_tracks'), h_level: 2, 
            examples: [
                loc(`event_tracks`)
            ]
        }, section);
        sideMenu('add',`minor-events`,`tracks`,loc('wiki_events_tracks'));
    }
    
    {   // Hoax
        let section = infoBoxBuilder(mainContent,{ name: 'hoax', template: 'events', label: loc('wiki_events_hoax'), paragraphs: 1, h_level: 2 });
        infoBoxBuilder(mainContent, { name: 'tech', template: 'events', label: loc('wiki_events_hoax'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [loc(`tech_club`)]
            }
        }, section);
        infoBoxBuilder(mainContent, { name: 'hoax_examples', template: 'events', label: loc('wiki_events_hoax'), h_level: 2, 
            examples: [
                loc(`event_hoax`)
            ]
        }, section);
        sideMenu('add',`minor-events`,`hoax`,loc('wiki_events_hoax'));
    }
    
    {   // Burial
        let section = infoBoxBuilder(mainContent,{ name: 'burial', template: 'events', label: loc('wiki_events_burial'), paragraphs: 1, h_level: 2 });
        infoBoxBuilder(mainContent, { name: 'tech', template: 'events', label: loc('wiki_events_burial'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [loc(`tech_club`)]
            }
        }, section);
        infoBoxBuilder(mainContent, { name: 'burial_examples', template: 'events', label: loc('wiki_events_burial'), h_level: 2, 
            examples: [
                loc(`event_burial`)
            ]
        }, section);
        sideMenu('add',`minor-events`,`burial`,loc('wiki_events_burial'));
    }
    
    {   // Artifacts
        let section = infoBoxBuilder(mainContent,{ name: 'artifacts', template: 'events', label: loc('wiki_events_artifacts'), paragraphs: 1, h_level: 2 });
        infoBoxBuilder(mainContent, { name: 'tech', template: 'events', label: loc('wiki_events_artifacts'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [loc(`tech_mad_science`)]
            }
        }, section);
        infoBoxBuilder(mainContent, { name: 'artifacts_examples', template: 'events', label: loc('wiki_events_artifacts'), h_level: 2, 
            examples: [
                loc(`event_artifacts`)
            ]
        }, section);
        sideMenu('add',`minor-events`,`artifacts`,loc('wiki_events_artifacts'));
    }
    
    {   // Parade
        let section = infoBoxBuilder(mainContent,{ name: 'parade', template: 'events', label: loc('wiki_events_parade'), paragraphs: 1, h_level: 2 
        });
        infoBoxBuilder(mainContent, { name: 'parade_condition', template: 'events', label: loc('wiki_events_parade'), paragraphs: 1, h_level: 2 
        }, section);
        infoBoxBuilder(mainContent, { name: 'parade_examples', template: 'events', label: loc('wiki_events_parade'), h_level: 2, 
            examples: [
                loc(`event_parade`)
            ]
        }, section);
        sideMenu('add',`minor-events`,`parade`,loc('wiki_events_parade'));
    }
    
    {   // Crop Circle
        let section = infoBoxBuilder(mainContent,{ name: 'crop_circle', template: 'events', label: loc('wiki_events_crop_circle'), paragraphs: 1, h_level: 2 });
        infoBoxBuilder(mainContent, { name: 'tech', template: 'events', label: loc('wiki_events_crop_circle'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [loc(`tech_agriculture`)]
            }
        }, section);
        infoBoxBuilder(mainContent, { name: 'crop_circle_examples', template: 'events', label: loc('wiki_events_crop_circle'), h_level: 2, 
            examples: [
                loc(`event_crop_circle`)
            ]
        }, section);
        sideMenu('add',`minor-events`,`crop_circle`,loc('wiki_events_crop_circle'));
    }
    
    {   // Llama
        let section = infoBoxBuilder(mainContent,{ name: 'llama', template: 'events', label: loc('wiki_events_llama'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [25,100]
            }
        });
        infoBoxBuilder(mainContent, { name: 'tech', template: 'events', label: loc('wiki_events_llama'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [loc(`tech_club`)]
            }
        }, section);
        infoBoxBuilder(mainContent, { name: 'llama_examples', template: 'events', label: loc('wiki_events_llama'), h_level: 2, 
            examples: [
                loc(`event_llama`,[51])
            ]
        }, section);
        sideMenu('add',`minor-events`,`llama`,loc('wiki_events_llama'));
    }
    
    {   // Cat
        let section = infoBoxBuilder(mainContent,{ name: 'cat', template: 'events', label: loc('wiki_events_cat'), paragraphs: 1, h_level: 2 });
        infoBoxBuilder(mainContent, { name: 'tech', template: 'events', label: loc('wiki_events_cat'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [loc(`tech_club`)]
            }
        }, section);
        infoBoxBuilder(mainContent, { name: 'cat_examples', template: 'events', label: loc('wiki_events_cat'), h_level: 2, 
            examples: [
                loc(`event_cat`)
            ]
        }, section);
        sideMenu('add',`minor-events`,`cat`,loc('wiki_events_cat'));
    }
    
    {   // Omen
        let section = infoBoxBuilder(mainContent,{ name: 'omen', template: 'events', label: loc('wiki_events_omen'), paragraphs: 1, h_level: 2 });
        infoBoxBuilder(mainContent, { name: 'tech', template: 'events', label: loc('wiki_events_omen'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [loc(`tech_club`)]
            }
        }, section);
        infoBoxBuilder(mainContent, { name: 'omen_examples', template: 'events', label: loc('wiki_events_omen'), h_level: 2, 
            examples: [
                loc(`event_omen`)
            ]
        }, section);
        sideMenu('add',`minor-events`,`omen`,loc('wiki_events_omen'));
    }
    
    {   // Theft
        let section = infoBoxBuilder(mainContent,{ name: 'theft', template: 'events', label: loc('wiki_events_theft'), paragraphs: 1, h_level: 2 });
        infoBoxBuilder(mainContent, { name: 'tech', template: 'events', label: loc('wiki_events_theft'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [loc(`tech_club`)]
            }
        }, section);
        infoBoxBuilder(mainContent, { name: 'theft_examples', template: 'events', label: loc('wiki_events_theft'), h_level: 2, 
            examples: [
                loc(`event_theft`,[loc('event_theft_type0')]),
                loc(`event_theft`,[loc('event_theft_type1')]),
                loc(`event_theft`,[loc('event_theft_type2')]),
                loc(`event_theft`,[loc('event_theft_type3')]),
                loc(`event_theft`,[loc('event_theft_type4')]),
                loc(`event_theft`,[loc('event_theft_type5')]),
                loc(`event_theft`,[loc('event_theft_type6')]),
                loc(`event_theft`,[loc('event_theft_type7')]),
                loc(`event_theft`,[loc('event_theft_type8')])
            ]
        }, section);
        sideMenu('add',`minor-events`,`theft`,loc('wiki_events_theft'));
    }
    
    {   // Compass
        let section = infoBoxBuilder(mainContent,{ name: 'compass', template: 'events', label: loc('wiki_events_compass'), paragraphs: 1, h_level: 2 });
        infoBoxBuilder(mainContent, { name: 'tech', template: 'events', label: loc('wiki_events_compass'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [loc(`tech_mining`)]
            }
        }, section);
        infoBoxBuilder(mainContent, { name: 'compass_examples', template: 'events', label: loc('wiki_events_compass'), h_level: 2, 
            examples: [
                loc(`event_compass`)
            ]
        }, section);
        sideMenu('add',`minor-events`,`compass`,loc('wiki_events_compass'));
    }
    
    {   // Bone
        let section = infoBoxBuilder(mainContent,{ name: 'bone', template: 'events', label: loc('wiki_events_bone'), paragraphs: 1, h_level: 2 });
        infoBoxBuilder(mainContent, { name: 'tech', template: 'events', label: loc('wiki_events_bone'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [loc(`tech_club`)]
            }
        }, section);
        infoBoxBuilder(mainContent, { name: 'bone_examples', template: 'events', label: loc('wiki_events_bone'), h_level: 2, 
            examples: [
                loc(`event_bone`)
            ]
        }, section);
        sideMenu('add',`minor-events`,`bone`,loc('wiki_events_bone'));
    }
    
    {   // Delicacy
        let section = infoBoxBuilder(mainContent,{ name: 'delicacy', template: 'events', label: loc('wiki_events_delicacy'), paragraphs: 1, h_level: 2 });
        infoBoxBuilder(mainContent, { name: 'tech', template: 'events', label: loc('wiki_events_delicacy'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [loc(`tech_mad_science`)]
            }
        }, section);
        infoBoxBuilder(mainContent, { name: 'delicacy_examples', template: 'events', label: loc('wiki_events_delicacy'), h_level: 2, 
            examples: [
                loc(`event_delicacy`)
            ]
        }, section);
        sideMenu('add',`minor-events`,`delicacy`,loc('wiki_events_delicacy'));
    }
    
    {   // Prank
        let section = infoBoxBuilder(mainContent,{ name: 'prank', template: 'events', label: loc('wiki_events_prank'), paragraphs: 1, h_level: 2 });
        infoBoxBuilder(mainContent, { name: 'tech', template: 'events', label: loc('wiki_events_prank'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [loc(`tech_club`)]
            }
        }, section);
        infoBoxBuilder(mainContent, { name: 'prank_examples', template: 'events', label: loc('wiki_events_prank'), h_level: 2, 
            examples: [
                loc(`event_prank`,[loc('event_prank_type0')]),
                loc(`event_prank`,[loc('event_prank_type1')]),
                loc(`event_prank`,[loc('event_prank_type2')]),
                loc(`event_prank`,[loc('event_prank_type3')]),
                loc(`event_prank`,[loc('event_prank_type4')]),
                loc(`event_prank`,[loc('event_prank_type5')]),
                loc(`event_prank`,[loc('event_prank_type6')]),
                loc(`event_prank`,[loc('event_prank_type7')]),
                loc(`event_prank`,[loc('event_prank_type8')]),
                loc(`event_prank`,[loc('event_prank_type9')])
            ]
        }, section);
        sideMenu('add',`minor-events`,`prank`,loc('wiki_events_prank'));
    }
    
    {   // Graffiti
        let section = infoBoxBuilder(mainContent,{ name: 'graffiti', template: 'events', label: loc('wiki_events_graffiti'), paragraphs: 1, h_level: 2 });
        infoBoxBuilder(mainContent, { name: 'tech', template: 'events', label: loc('wiki_events_graffiti'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [loc(`tech_science`)]
            }
        }, section);
        infoBoxBuilder(mainContent, { name: 'graffiti_examples', template: 'events', label: loc('wiki_events_graffiti'), h_level: 2, 
            examples: [
                loc(`event_graffiti`)
            ]
        }, section);
        sideMenu('add',`minor-events`,`graffiti`,loc('wiki_events_graffiti'));
    }
    
    {   // Soul
        let section = infoBoxBuilder(mainContent,{ name: 'soul', template: 'events', label: loc('wiki_events_soul'), paragraphs: 1, h_level: 2 
        });
        infoBoxBuilder(mainContent, { name: 'soul_condition', template: 'events', label: loc('wiki_events_soul'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [loc(`trait_soul_eater_name`)]
            }
        }, section);
        infoBoxBuilder(mainContent, { name: 'soul_examples', template: 'events', label: loc('wiki_events_soul'), h_level: 2, 
            examples: [
                loc(`event_soul`)
            ]
        }, section);
        sideMenu('add',`minor-events`,`soul`,loc('wiki_events_soul'));
    }
    
    {   // Cheese
        let section = infoBoxBuilder(mainContent,{ name: 'cheese', template: 'events', label: loc('wiki_events_cheese'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [`1%`,10,25]
            }});
        infoBoxBuilder(mainContent, { name: 'tech', template: 'events', label: loc('wiki_events_cheese'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [swissKnife()]
            }
        }, section);
        infoBoxBuilder(mainContent, { name: 'cheese_examples', template: 'events', label: loc('wiki_events_cheese'), h_level: 2, 
            examples: [
                loc(`event_cheese`)
            ]
        }, section);
        sideMenu('add',`minor-events`,`cheese`,loc('wiki_events_cheese'));
    }
    
    {   // Tremor
        let section = infoBoxBuilder(mainContent,{ name: 'tremor', template: 'events', label: loc('wiki_events_tremor'), paragraphs: 1, h_level: 2 });
        infoBoxBuilder(mainContent, { name: 'tech', template: 'events', label: loc('wiki_events_tremor'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [loc(`tech_club`)]
            }
        }, section);
        infoBoxBuilder(mainContent, { name: 'tremor_examples', template: 'events', label: loc('wiki_events_tremor'), h_level: 2, 
            examples: [
                loc(`event_tremor`)
            ]
        }, section);
        sideMenu('add',`minor-events`,`tremor`,loc('wiki_events_tremor'));
    }
    
    {   // Rumor
        let section = infoBoxBuilder(mainContent,{ name: 'rumor', template: 'events', label: loc('wiki_events_rumor'), paragraphs: 1, h_level: 2 });
        infoBoxBuilder(mainContent, { name: 'tech', template: 'events', label: loc('wiki_events_rumor'), paragraphs: 1, h_level: 2,
            para_data: {
                1: [loc(`tech_club`)]
            }
        }, section);
        infoBoxBuilder(mainContent, { name: 'rumor_examples', template: 'events', label: loc('wiki_events_rumor'), h_level: 2, 
            examples: [
                loc(`event_rumor`,[loc('event_rumor_type0')]),
                loc(`event_rumor`,[loc('event_rumor_type1')]),
                loc(`event_rumor`,[loc('event_rumor_type2')]),
                loc(`event_rumor`,[loc('event_rumor_type3')]),
                loc(`event_rumor`,[loc('event_rumor_type4')]),
                loc(`event_rumor`,[loc('event_rumor_type5')]),
                loc(`event_rumor`,[loc('event_rumor_type6')]),
                loc(`event_rumor`,[loc('event_rumor_type7')]),
                loc(`event_rumor`,[loc('event_rumor_type8')]),
                loc(`event_rumor`,[loc('event_rumor_type9')])
            ]
        }, section);
        sideMenu('add',`minor-events`,`rumor`,loc('wiki_events_rumor'));
    }
}

function specialEventsPage(content){
    let mainContent = sideMenu('create',content);
    
    {   // Friday the 13th
        let event = 'crystal';
        let section = infoBoxBuilder(mainContent,{ name: event, template: 'events', label: loc(`wiki_events_${event}`), paragraphs: 2, break: [2], h_level: 2,
            para_data: {
                2: [loc('feat_friday_name')],
            }
        });
        infoBoxBuilder(mainContent, { name: `${event}_condition`, template: 'events', label: loc(`wiki_events_${event}`), paragraphs: 2, break: [2], h_level: 2 }, section);
        sideMenu('add',`special-events`,event,loc(`wiki_events_${event}`));
    }

    {   // Valentine's Day
        let event = 'valentine';
        let section = infoBoxBuilder(mainContent,{ name: event, template: 'events', label: loc(`wiki_events_${event}`), paragraphs: 3, break: [2,3], h_level: 2,
            para_data: {
                2: [loc('feat_love_name')],
            }
        });
        infoBoxBuilder(mainContent, { name: `${event}_condition`, template: 'events', label: loc(`wiki_events_${event}`), paragraphs: 2, break: [2], h_level: 2 }, section);
        sideMenu('add',`special-events`,event,loc(`wiki_events_${event}`));
    }

    {   // Unlucky
        let event = 'unlucky';
        let section = infoBoxBuilder(mainContent,{ name: event, template: 'events', label: loc(`wiki_events_${event}`), paragraphs: 2, break: [2], h_level: 2,
            para_data: {
                2: [loc('feat_leprechaun_name')],
            }
        });
        infoBoxBuilder(mainContent, { name: `${event}_condition`, template: 'events', label: loc(`wiki_events_${event}`), paragraphs: 2, break: [2], h_level: 2 }, section);
        sideMenu('add',`special-events`,event,loc(`wiki_events_${event}`));
    }

    {   // April Fools Day
        let event = 'fool';
        let section = infoBoxBuilder(mainContent,{ name: event, template: 'events', label: loc(`wiki_events_${event}`), paragraphs: 2, break: [2], h_level: 2,
            para_data: {
                2: [loc('feat_fool_name')],
            }
        });
        infoBoxBuilder(mainContent, { name: `${event}_condition`, template: 'events', label: loc(`wiki_events_${event}`), paragraphs: 2, break: [2], h_level: 2 }, section);
        sideMenu('add',`special-events`,event,loc(`wiki_events_${event}`));
    }

    {
        let easter = eventActive('easter');
        {   // Hopper
            let event = 'hopper';
            let section = infoBoxBuilder(mainContent,{ name: event, template: 'events', label: loc(`wiki_events_${event}`), paragraphs: 2, break: [2], h_level: 2,
                para_data: {
                    2: [loc('feat_easter_name')],
                }
            });
            infoBoxBuilder(mainContent, { name: `${event}_condition`, template: 'events', label: loc(`wiki_events_${event}`), paragraphs: 2, break: [2], h_level: 2,
                para_data: {
                    1: [`${loc(`month${easter.date[0]}`)} ${easter.date[1]}`],
                }
            }, section);
            sideMenu('add',`special-events`,event,loc(`wiki_events_${event}`));
        }

        {   // Egg Hunt
            let event = 'egghunt';
            let section = infoBoxBuilder(mainContent,{ name: event, template: 'events', label: loc(`wiki_events_${event}`), paragraphs: 5, break: [2,3,4], h_level: 2,
                para_data: {
                    2: [loc('feat_egghunt_name'),12,15],
                    5: [loc('trait_hyper_name'),loc('trait_fast_growth_name'),loc('trait_rainbow_name'),loc('trait_optimistic_name')],
                }
            });

            let hints = [
                `U2FsdGVkX1/PcdpekGFnkjSSCBa9yVo3z5xq3a2662iSlAA8yuaPEsK4Qyn5OSED`,
                `U2FsdGVkX180d8+Fl8mi96tY7KHkOWLkO0syi+BeZW47ga9AdJiBdbsksLaMTGvT`,
                `U2FsdGVkX19hHAatSiZiYe33Hx4u+bixNx4U7O4smhKVb/a+umB6MlIbgM3eE3UG`,
                `U2FsdGVkX188sIGEBwWHyzf0SkKQ027dzHZmkJp93FeXrXu70hD0KqYfoTxnbGqU`,
                `U2FsdGVkX18dLIKZyFStCpVKJrFAc36LF4uNcpuJd8CGU0yC1rPllsNfBHAhrfwT`,
                `U2FsdGVkX1/ZRiMKl3kG4PUQOx8bdgz7va6bLW3Gf5COBHAs7CMDITt7SDeIygvd`,
                `U2FsdGVkX19FZ4kZmquyj6NUTqo+AYS7U31mSik1W2Awdp5M6L1WlsG4Px8uUYUN`,
                `U2FsdGVkX1+9Eh/34O02cW0SuZg0rQYZnomSBjBQU4Q3VSU0y62ypmoJNjOb5Uix`,
                `U2FsdGVkX1+3qtRH9MVd1B8T+JP5DgnlER6u8P60vX/NVjLGuceG7DX+b2yPW3J5`,
                `U2FsdGVkX18JYj4R4QuZBpDdcsEjkYPAf3uNNIzu6Vs=`,
                `U2FsdGVkX1+Eq43UVbtPlveU6HqIU8PSHL8QH+FlUxWkhyB1S+QAVVM2z0OryeJd`,
                `U2FsdGVkX18brcDy1P4HEGkmTw5t19CgWEshDFRSByELjSG9MtvSdSBbj13JhYuG`,
                `U2FsdGVkX1/vr39YAfqKcFM7c8ed6Oi7lRrDYKDtfUJRKF3pcrIRAWc4FF/Tt5BjwaXOi0slDE9JmeIDifD2gw==`,
                `U2FsdGVkX19KtuHoWRLTz0wLH8D/fLoOriDsmk6agzT85xsAAXv26ILjSV2C8mpi`,
                `U2FsdGVkX18/Tyjq6czHYJKjJQPXcRCgqmZqu2AFmx2FddfQPzM+YkXXECLMVA+e`
            ];

            let solutions = [
                `U2FsdGVkX1+duY7hvIoeOGqas8WhBy8hojTLQ0OxadHBEDzOPwpc4K1Y6N+WyDah`,
                `U2FsdGVkX1+AQhvu619WY9xow4HmruRn5yJefuIkv3u7U6baVdV/mHLJfUaNmTE6`,
                `U2FsdGVkX1/whjtke2hryY9zWuV0MTzN2JKXaFyzwJXwtEx9+iLMbHkdVFwi6h63`,
                `U2FsdGVkX18FBXNUeu4NIIiy4Mmk++iyUIJKxFS/mZvAj98+eJR+SZj8xpXHTkia`,
                `U2FsdGVkX1/Imw6q6mixFM1BlgToue0NUqbCTHKuNZFHC1Vp7I934fUpj/xCFg33`,
                `U2FsdGVkX18h03LNWLTF59y343iStuLaS/0cgvLtKSMzm8UpzMVWBxwkGGSxDDPO`,
                `U2FsdGVkX18+W3R7IyisKi9TgzbkQ/636SJ7ubGsCx6Rz5GMxlTkbTVbOG6YFAC4Cle0TjI1riEzpGQtuCr6C+1mX3FdCLVz3oaGWqIajvI=`,
                `U2FsdGVkX18CjBzSHSIPZ07ZgvI6JgGiVIJE4ugYa2xWFeM1a/OnXrMT1sBpwmXwiHayBp1tdw83/4I55pGwpA==`,
                `U2FsdGVkX1+QWybO+rnrqxI23qXSKzevq0C/NPkX8/kd5h0xo20ozmxo4Pknui3G`,
                `U2FsdGVkX1//2GoF+3kVNPim1ThpVMgMCHEzSH0UZCrc4EIjktoxBC87gXddwhZR`,
                `U2FsdGVkX1/HQFE7BGTMIHN8G4pljsZlwtFaXHZh2U/VN4DD8lOL4OUYxnJUGr+g`,
                `U2FsdGVkX1/f1jFsIVKmxsXq85PuOj+fq+9WtYf1AZbPsuChio/XV6mpCxlTJz8X`,
                `U2FsdGVkX1+NRsztgBjDQeevIAYiHJ+X9dUERkDoYpLcvYAvWWzVvbjk4uq4dSMPEuykMqsZGGwvBtl1V0T+pO254xK8+5xWjZYnE9x6A+I=`,
                `U2FsdGVkX1//Crqk3ZOt8MHG/C4V91VEORQ3rQe4CEBHQhqfMD84PrEBZkwN7VpKvBgcg+2FsDknW+LDnNPIZA==`,
                `U2FsdGVkX1/bUrGTAmEkt6ukJKG8tIAIUVr4fnMFPsdamUtLJBGIG2dwQyaYywTD`
            ];

            const date = new Date();
            const year = date.getFullYear();
            const passphrase = 'egghunt';
            let eggs = `<div class="has-text-warning">${loc('wiki_feat_egghunt_found')}</div>`;
            eggs = eggs + `<div class="tbl">`;
            for (let i=1; i<=15; i++){
                let egg = global.special.egg.hasOwnProperty(year) && global.special.egg[year][`egg${i}`] ? 'has-text-success' : 'has-text-danger';
                let found = global.special.egg.hasOwnProperty(year) && global.special.egg[year][`egg${i}`] ? 'found' : 'missing';
                
                let hint = `<span class="tcell">${loc('wiki_events_hint_avail')} ${loc(`month${easter.hintDate[0]}`)} ${easter.hintDate[1]}</span>`;
                if (easter.hint){
                    const bytes = CryptoJS.AES.decrypt(hints[i-1], passphrase);
                    hint = `<span class="tcell">` + bytes.toString(CryptoJS.enc.Utf8) + `</span>`;
                }

                let sol = `<span class="tcell">${loc('wiki_events_sol_avail')} ${loc(`month${easter.solveDate[0]}`)} ${easter.solveDate[1]}</span>`;
                if (easter.solve){
                    sol = `<span class="tcell eggsol" data-sol="${solutions[i-1]}">${loc('wiki_events_reveal_sol')}</span>`;
                }

                eggs = eggs + `<div class="trow"><span role="img" class="tcell ${egg}" aria-label="${loc('wiki_feat_egghunt_num',[i])} ${found}">${loc('wiki_feat_egghunt_num',[i])}</span>${hint}${sol}</div>`
            }
            eggs = eggs + `</div>`;
            section.append(eggs);

            $(`.eggsol`).on('click', function(){
                const solution = $(this).attr('data-sol');
                const bytes = CryptoJS.AES.decrypt(solution, passphrase);
                $(this).html(bytes.toString(CryptoJS.enc.Utf8));
            });

            infoBoxBuilder(mainContent, { name: `${event}_condition`, template: 'events', label: loc(`wiki_events_${event}`), paragraphs: 2, break: [2], h_level: 2,
                para_data: {
                    1: [`${loc(`month${easter.date[0]}`)} ${easter.date[1]}`, `${loc(`month${easter.endDate[0]}`)} ${easter.endDate[1]}`],
                }
            }, section);
            sideMenu('add',`special-events`,event,loc(`wiki_events_${event}`));
        }
    }

    {   // Launch Day
        let event = 'launch_day';
        let section = infoBoxBuilder(mainContent,{ name: event, template: 'events', label: loc(`wiki_events_${event}`), paragraphs: 3, break: [2,3], h_level: 2,
            para_data: {
                2: [loc('feat_launch_day_name')],
                3: [`5%`],
            }
        });
        infoBoxBuilder(mainContent, { name: `${event}_condition`, template: 'events', label: loc(`wiki_events_${event}`), paragraphs: 2, break: [2], h_level: 2 }, section);
        sideMenu('add',`special-events`,event,loc(`wiki_events_${event}`));
    }

    {   // Halloween
        let event = 'halloween';
        let section = infoBoxBuilder(mainContent,{ name: event, template: 'events', label: loc(`wiki_events_${event}`), paragraphs: 2, break: [2], h_level: 2,
            para_data: {
                2: [loc('feat_boo_name')],
            }
        });
        infoBoxBuilder(mainContent, { name: `${event}_condition`, template: 'events', label: loc(`wiki_events_${event}`), paragraphs: 2, break: [2], h_level: 2 }, section);
        sideMenu('add',`special-events`,event,loc(`wiki_events_${event}`));
    }

    {   // Thanksgiving
        let event = 'turkey';
        let section = infoBoxBuilder(mainContent,{ name: event, template: 'events', label: loc(`wiki_events_${event}`), paragraphs: 3, break: [2,3], h_level: 2,
            para_data: {
                2: [loc('feat_gobble_gobble_name')],
            }
        });
        infoBoxBuilder(mainContent, { name: `${event}_condition`, template: 'events', label: loc(`wiki_events_${event}`), paragraphs: 2, break: [2], h_level: 2 }, section);
        sideMenu('add',`special-events`,event,loc(`wiki_events_${event}`));
    }

    {   // XMas
        let event = 'xmas';
        let section = infoBoxBuilder(mainContent,{ name: event, template: 'events', label: loc(`wiki_events_${event}`), paragraphs: 5, break: [2,3,4,5], h_level: 2,
            para_data: {
                2: [loc('feat_xmas_name')],
            }
        });
        infoBoxBuilder(mainContent, { name: `${event}_condition`, template: 'events', label: loc(`wiki_events_${event}`), paragraphs: 1, h_level: 2 }, section);
        sideMenu('add',`special-events`,event,loc(`wiki_events_${event}`));
    }
}