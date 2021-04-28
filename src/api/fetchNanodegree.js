import {
  API_ENDPOINTS_UDACITY_GRAPHQL,
} from '../config';
import { fetchApiUdacityGraphql } from '.';


/**
 * Fetch JSON data of a Nanodegree from Udacity API
 * @param {string} ndInfo Nanodegree information
 * @param {string} udacityAuthToken Udacity authentication token
 */
export default function fetchNanodegree(ndInfo, udacityAuthToken) {
  const { key, locale, version } = ndInfo;

  const queryGraphql = `{\"query\":\"\\n    query NanodegreeQuery {\\n      nanodegree(key: \\\"${key}\\\" version: \\\"${version}\\\" locale: \\\"${locale}\\\") {\\n        \\n  id\\n  key\\n  title\\n  semantic_type\\n  is_public\\n\\n        cohorts {\\n          id\\n          start_at\\n          due_at\\n          end_at\\n        }\\n        version\\n        locale\\n        title\\n        color_scheme\\n        enrollment {\\n          id\\n          product_variant\\n          variant\\n          high_touch\\n          open_ended\\n          service_model_id\\n          includes_personal_mentor\\n          includes_student_hub\\n          includes_knowledge_reviews\\n          preorder\\n          started_at\\n          static_access {\\n            static_access\\n            access_expiry_at\\n          }\\n          attributes\\n        }\\n        nd_units {\\n          id\\n        }\\n        hero_image {\\n          url\\n        }\\n        forum_path\\n        summary\\n        is_graduated\\n        is_term_based\\n        is_default\\n        packaging_options\\n        cloud_resources_aws_service_id\\n        is_ready_for_graduation\\n        is_reviewer\\n        is_facilitator\\n        project_deadlines {\\n          \\n  due_at\\n  node_key\\n  progress_key\\n\\n        }\\n        \\n  user_state {\\n    node_key\\n    completed_at\\n    last_viewed_at\\n    unstructured\\n  }\\n\\n        \\n  aggregated_state {\\n    node_key\\n    completion_amount\\n    completed_count\\n    concept_count\\n    last_viewed_child_key\\n    part_aggregated_states {\\n      node_key\\n      completed_at\\n      completion_amount\\n      completed_count\\n      concept_count\\n      last_viewed_child_key\\n      module_aggregated_states {\\n        node_key\\n        completed_at\\n        completion_amount\\n        completed_count\\n        concept_count\\n        last_viewed_child_key\\n        lesson_aggregated_states {\\n          node_key\\n          completed_at\\n          completed_count\\n          concept_count\\n          completion_amount\\n          last_viewed_child_key\\n        }\\n      }\\n    }\\n  }\\n\\n        \\n  resources {\\n    files {\\n      name\\n      uri\\n    }\\n    google_plus_link\\n    career_resource_center_link\\n    coaching_appointments_link\\n    office_hours_link\\n    aws_provisioning_link\\n  }\\n\\n        specializations {\\n          key\\n          title\\n          required_count\\n        }\\n        start_date\\n        parts(part_types: [Core, Elective, Career]) {\\n          \\n  id\\n  key\\n  title\\n  semantic_type\\n  is_public\\n\\n          version\\n          locale\\n          summary\\n          part_type\\n          is_public\\n          locked_reason\\n          locked_until\\n          \\n  resources {\\n    files {\\n      name\\n      uri\\n    }\\n    google_plus_link\\n    career_resource_center_link\\n    coaching_appointments_link\\n    office_hours_link\\n    aws_provisioning_link\\n  }\\n\\n          \\n  image {\\n    url\\n    width\\n    height\\n  }\\n\\n          specialization {\\n            key\\n            image {url width height}\\n            video {youtube_id}\\n            duration_in_weeks\\n            overview\\n            partners\\n            resources\\n          }\\n          modules {\\n            \\n  id\\n  key\\n  title\\n  semantic_type\\n  is_public\\n\\n            version\\n            locale\\n            is_project_module\\n            forum_path\\n            lessons {\\n              \\n  id\\n  key\\n  progress_key\\n  version\\n  locale\\n  semantic_type\\n  summary\\n  title\\n  duration\\n  is_public\\n  is_project_lesson\\n  display_workspace_project_only\\n\\n              \\n  image {\\n    url\\n    width\\n    height\\n  }\\n\\n              \\n  video {\\n    \\n  youtube_id\\n  china_cdn_id\\n  topher_id\\n  transcodings {\\n    uri_480p_mp4\\n    uri_720p_mp4\\n    uri_480p_1000kbps_mp4\\n  }\\n\\n  }\\n\\n              lab {\\n                \\n  id\\n  key\\n  version\\n  locale\\n  estimated_session_duration\\n  duration\\n  is_public\\n  semantic_type\\n  title\\n  evaluation_objective\\n  partners\\n  overview {\\n    title\\n    summary\\n    key_takeaways\\n    \\n  video {\\n    \\n  youtube_id\\n  china_cdn_id\\n  topher_id\\n  transcodings {\\n    uri_480p_mp4\\n    uri_720p_mp4\\n    uri_480p_1000kbps_mp4\\n  }\\n\\n  }\\n\\n  }\\n  details {\\n    text\\n  }\\n  review_video {\\n    \\n  youtube_id\\n  china_cdn_id\\n  topher_id\\n  transcodings {\\n    uri_480p_mp4\\n    uri_720p_mp4\\n    uri_480p_1000kbps_mp4\\n  }\\n\\n  }\\n  result {\\n    state\\n    skill_confidence_rating_after\\n    skill_confidence_rating_before\\n  }\\n  workspace {\\n    \\n  id\\n  key\\n  title\\n  semantic_type\\n  is_public\\n\\n    workspace_id\\n    pool_id\\n    view_id\\n    configuration\\n    starter_files\\n  }\\n\\n              }\\n              project {\\n                \\n  key\\n  progress_key\\n  version\\n  locale\\n  duration\\n  semantic_type\\n  title\\n  description\\n  is_public\\n  summary\\n  forum_path\\n  rubric_id\\n  terminal_project_id\\n  reviews_project_id\\n  is_career\\n  \\n  resources {\\n    files {\\n      name\\n      uri\\n    }\\n    google_plus_link\\n    career_resource_center_link\\n    coaching_appointments_link\\n    office_hours_link\\n    aws_provisioning_link\\n  }\\n\\n  \\n  image {\\n    url\\n    width\\n    height\\n  }\\n\\n\\n              }\\n              concepts {\\n                \\n  id\\n  key\\n  title\\n  semantic_type\\n  is_public\\n\\n                \\n  resources {\\n    files {\\n      name\\n      uri\\n    }\\n    google_plus_link\\n    career_resource_center_link\\n    coaching_appointments_link\\n    office_hours_link\\n    aws_provisioning_link\\n  }\\n\\n              }\\n            }\\n          }\\n        }\\n      }\\n    }\\n  \",\"variables\":null,\"locale\":\"en-us\"}`

  return fetchApiUdacityGraphql(API_ENDPOINTS_UDACITY_GRAPHQL, queryGraphql, udacityAuthToken);
}
